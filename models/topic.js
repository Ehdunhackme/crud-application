import mongoose, { Schema } from "mongoose";

const topicschema = new Schema(
    {
      title: String,
      description: String,
    },
    {
        timestamps: true,
    },
);

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicschema);

export default Topic;