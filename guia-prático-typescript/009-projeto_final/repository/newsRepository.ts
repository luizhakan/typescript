import mongoose, { mongo } from "mongoose";
import { NewsSchema } from "../models/newsSchema";

export const newsRepository = mongoose.model("news", NewsSchema);
