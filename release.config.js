/** @type {import('semantic-release').Options} */
module.exports = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    ["@semantic-release/npm", { npmPublish: false }],
    [
      "@semantic-release/git",
      {
        assets: ["dist/**", "package.json", "package-lock.json", "CHANGELOG.md"]
      }
    ],
    "@semantic-release/github"
  ]
}
