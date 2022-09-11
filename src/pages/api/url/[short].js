import { dbConnect } from 'config/db'
import joi from 'joi'
import MiniUrl from 'models/mini-url'

dbConnect()

const urlGET = joi.object({
  short: joi.required(),
})

export default async function handler(req, res) {
  const { error } = urlGET.validate(req.query)
  if (error) return res.status(500).json({ error })

  const found = await MiniUrl.findOne({ short: req.query.short }).exec()
  if (!found) return res.status(400).json({ error: 'Short url not found' })

  found.clicks++
  found.save()

  return res.redirect(found.original)
}
