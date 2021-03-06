'use strict';
module.exports = function(sequelize, DataTypes) {
  var Donation = sequelize.define('Donation', {
    donor_id: DataTypes.INTEGER,
    campaign_id: DataTypes.INTEGER,
    amount: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Donation.belongsTo(models.User, {foreignKey : 'donor_id'})
        Donation.belongsTo(models.Campaign, {foreignKey : 'campaign_id'})
      }
    }
  });
  return Donation;
};
