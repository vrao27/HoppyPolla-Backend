const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//pass in object for the schema
const recipeSchema = new Schema({
  title: {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    batchVolume: {
      type: Number,
      required: true,
    },
  },
  description: {
    text: {
      type: String,
      required: true,
    },
    originalGravity: {
      type: Number,
      required: true,
    },
    bitterness: {
      type: Number,
      required: true,
    },
    color: {
      type: Number,
      required: true,
    },
    alcohol: {
      type: Number,
      required: true,
    },
  },
  brewingWater: {
    mainInfusion: {
      type: Number,
      required: true,
    },
    sparge: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  mashGrains: [
    {
      grainType: {
        type: String,
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
    },
  ],
  mashSchedule: {
    mashIn: {
      type: Number,
      required: true,
    },
    rest1: {
      temperature: {
        type: Number,
        required: true,
      },
      time: {
        type: Number,
        required: true,
      },
    },
    rest2: {
      temperature: {
        type: Number,
        required: true,
      },
      time: {
        type: Number,
        required: true,
      },
    },
    rest3: {
      temperature: {
        type: Number,
        required: false,
      },
      time: {
        type: Number,
        required: false,
      },
    },
    mashOut: {
      type: Number,
      required: true,
    },
  },
  boil: {
    time: {
      type: Number,
      required: true,
    },
    hops: [
      {
        type: {
          type: String,
          required: true,
        },
        amount: {
          type: Number,
          required: true,
        },
        boilingTime: {
          type: Number,
          required: true,
        },
      },
    ],
    addOns: [
      {
        type: {
          type: String,
          required: true,
        },
        amount: {
          type: Number,
          required: true,
        },
        boilingTime: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  fermentation: {
    yeast: {
      type: String,
      required: true,
    },
    fermentationTemperature: {
      type: Number,
      required: true,
    },
    finalGravity: {
      type: Number,
      required: true,
    },
    carbonation: {
      type: Number,
      required: true,
    },
  },
});
module.exports = mongoose.model("Recipe", recipeSchema);
