import mongoose from 'mongoose';

const graphSchema = mongoose.Schema({
  data: {
    type: String,
  },
  nav: {
    type: String,
  },
});

const metaDataSchema = mongoose.Schema({
  heading: {
    type: String,
  },
  paragraph: {
    type: String,
  },
});

const fundSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
      unique: true,
    },
    oneYearReturns: {
      type: String,
      required: true,
    },
    fundType: {
      type: Array,
      default: [],
    },
    rating: {
      type: Number,
    },
    graphData: [graphSchema],
    pros: {
      type: Array,
    },
    cons: {
      type: Array,
    },
    metaData: [metaDataSchema],
  },
  {
    timestamps: true,
  }
);

const Fund = mongoose.model('Fund', fundSchema);

export default Fund;
