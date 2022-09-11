import { dbConnect } from 'config/db'
import joi from 'joi'
import MiniUrl from 'models/mini-url'
import shortid from 'shortid'

dbConnect()

const urlBody = joi.object({
  original: joi.string().required(),
})

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      const urls = await MiniUrl.find()
      return res.status(200).json(urls)
    case 'POST':
      const body = req.body
      const { error } = urlBody.validate(body)
      if (error) return res.status(500).json({ error })
      const found = await MiniUrl.findOne({ original: body.original })
        .select(['-_id', '-createdAt', '-updatedAt', '-clicks'])
        .exec()
      if (found) return res.status(201).json(found)
      const newUrl = new MiniUrl({
        original: body.original,
        short: shortid.generate(),
        clicks: 0,
      })
      const savedUrl = await newUrl.save()
      return res.status(201).json(savedUrl)
    default:
      return res.status(400).json({ error: 'Method not supported' })
  }
}
