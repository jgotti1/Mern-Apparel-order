import ApparelData from "../models/apparel.js";

export const getApparel = async (req, res) => {
  try {
    const allApparel = await ApparelData.find().sort({ createdAt: -1 });
    res.status(200).json(allApparel);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createApparel = async (req, res) => {
  const apparel = req.body;
  const newApparel = new ApparelData(apparel);
  try {
    await newApparel.save();
    res.status(201).json(newApparel);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const deleteApparel = async (req, res) => {
  const id = req.params.id;
  try {
    await ApparelData.findByIdAndRemove(id).exec();
    res.send("Record Deleted Successfully!");
  } catch (error) {
    console.log(error);
  }
};
export const updateApparel = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    await ApparelData.findByIdAndUpdate(id).exec();
    res.send("Record Updated Successfully!");
  } catch (error) {
    console.log(`server ${error}`);
  }
};
