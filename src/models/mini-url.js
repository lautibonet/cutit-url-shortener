import { Schema, model, models } from 'mongoose'

const miniUrlSchema = new Schema(
  {
    original: {
      type: String,
      required: true,
      trim: true,
    },
    short: {
      type: String,
      required: true,
    },
    clicks: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

export default models.MiniUrl || model('MiniUrl', miniUrlSchema)
