const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const staffSchema = new Schema(
  {
    staff_name: {
      type: String,
      required: [true, "Name required"],
      trim: true,
    },
    staff_phone: {
      type: Number,
      required: [true, "Phone required"],
      trim: true,
    },
    staff_salary: {
      type: Number,
      required: [true, "Salary required"],
      trim: true,
    },
    staff_joining_date: {
      type: Date,
      default: Date.now,
      trim: true,
    },
    staff_last_salary_paid: {
      type: String,
      required: [true, "Last salary given required"],
      trim: true,
    },
    staff_upi: {
      type: String,
      trim: true,
    },
    staff_image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Staff = mongoose.model("Staff", staffSchema);

module.exports = Staff;
