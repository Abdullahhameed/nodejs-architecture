// // import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//   first_name: {
//     type: String,
//     required: true,
//   },
//   last_name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     match: [
//       /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
//       "Please give a valid email address",
//     ],
//     required: true,
//     unique: [true, "User already exists"],
//   },
//   password: {
//     type: String,
//     minlength: 8,
//     match: [
//       /((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))/,
//       "Password must include one lowercase character, one uppercase character, a number, and a special character.",
//     ],
//     required: function () {
//       return this.signup_type === "manual";
//     },
//   },
//   image: {
//     type: String,
//     required: false,
//   },
//   skills: {
//     type: [String],
//     required: false,
//   },
//   industries: {
//     type: [String],
//     required: false,
//   },
//   tools: {
//     type: [Object],
//     required: false,
//   },
//   bio: {
//     type: String,
//     required: false,
//   },
//   demo_reels: {
//     type: [String],
//     required: false,
//   },
//   two_fa_enabled: {
//     type: Boolean,
//     default: false,
//   },
//   deletead_at: {
//     type: String,
//     required: false,
//   },
//   is_deletead: {
//     type: Boolean,
//     default: false,
//   },
//   website: {
//     type: String,
//     required: false,
//   },
//   designation: {
//     type: String,
//     required: false,
//   },
//   // portfolio_link: {
//   //   type: [String],
//   //   required: false,
//   // },
//   social_media_link: {
//     type: [Object],
//     required: false,
//   },
//   country: {
//     type: String,
//     required: false,
//   },
//   state: {
//     type: String,
//     required: false,
//   },
//   city: {
//     type: String,
//     required: false,
//   },
//   zip_code: {
//     type: String,
//     required: false,
//   },
//   // location: {
//   //   type: String,
//   //   required: false,
//   // },
//   signup_type: {
//     type: String,
//     enum: ["manual", "google", "facebook"],
//     required: false,
//   },
//   last_login: {
//     type: Date,
//     required: false,
//   },
//   role: {
//     type: String,
//     required: false,
//   },
//   is_verified: {
//     type: Boolean,
//     default: false,
//   },
//   projects: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "projects",
//     },
//   ],
// });
// const User = mongoose.model("User", userSchema);

// export default User;
