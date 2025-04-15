const passport = require("passport");
const Users = require("../models/users.model");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const Google = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:8000/api/v1/users/callback",
      },

      async function (accessToken, refreshToken, profile, cb) {
        console.log(profile);

        const user = await Users.findOne({ googleId: profile.id });

        if (!user) {
          await Users.create({
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value,
            role: "user",
          });

          return cb(null, user);
        }

        return cb(null, user);
      }
    )
  );

  passport.serializeUser(function (user, done) {
    done(null, user._id);
  });

  passport.deserializeUser(async function (_id, done) {
    try {
      const user = await Users.findById(_id);

      done(null, user);
    } catch (error) {
      done(error, null);
    }

  });
};

module.exports = Google;