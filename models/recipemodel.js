const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//pass in object for the schema
const recipeSchema = new Schema({
  title: {
    name: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    defaultQty: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  },
  description: {
    text: {
      type: String,
      required: true
    },
    originalGravity: {
      type: Number,
      required: true
    },
    bitterness: {
      type: Number,
      required: true
    },
    color: {
      type: Number,
      required: true
    },
    alcohol: {
      type: Number,
      required: true
    }
  },
  brewingWater: {
    mainInfusion: {
      type: String,
      required: true
    },
    sparge: {
      type: String,
      required: true
    },
    total: {
      type: String,
      required: true
    }
  },
  mashGrains: {
    grainType: {
      type: String,
      required: true
    }
  },
  mashSchedule: {
    mashIn: {
      type: Number,
      required: true
    },
    rest1: {
      temperature: {
        type: Number,
        required: true
      },
      time: {
        type: Number,
        required: true
      }
    },
    rest2: {
      temperature: {
        type: Number,
        required: true
      },
      time: {
        type: Number,
        required: true
      }
    },
    rest3: {
      temperature: {
        type: String,
        required: false
      },
      time: {
        type: String,
        required: false
      }
    },
    mashOut: {
      type: Number,
      required: true
    }
  },
  boil: {
    time: {
      type: Number,
      required: true
    },
    hop_type: {
      type: String,
      required: true
    },
    hop_add_on: {
      type: String,
      required: true
    }
  },
  fermentation: {
    yeast: {
      type: String,
      required: true
    },
    fermentationTemperature: {
      type: Number,
      required: true
    },
    finalGravity: {
      type: Number,
      required: true
    },
    carbonation: {
      type: Number,
      required: true
    }
  }
});
module.exports = mongoose.model("Recipe", recipeSchema);
