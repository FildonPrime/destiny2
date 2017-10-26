class Profile {
  constructor(content) {
    this.platform = platforms[content.userInfo.membershipType];
    this.displayName = content.userInfo.displayName;
    this.id = content.userInfo.membershipId;
    this.lastPlayed = (Date.parse(content.dateLastPlayed)/1000).toString();
  }
}

const platforms = {
  1: ['1', 'xbl', 'xbox'],
  2: ['2', 'psn', 'playstation'],
  3: ['3', 'pc', 'computer']
};

module.exports = Profile;
