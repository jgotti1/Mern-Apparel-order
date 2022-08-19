import mongoose from "mongoose";

const apparelSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    appareltype: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    payment: {
      type: String,
      required: true,
    },
    ispaid: {
      type: String,
      default: "NO",
      required: false,
    },
  },
  { timestamps: true }
);

const apparel = mongoose.model("apparel", apparelSchema);

export default apparel;
