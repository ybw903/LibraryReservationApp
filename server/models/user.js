module.exports = (sequelize, DataTypes)=>{
    return sequelize.define('user',{
        s_ID:{
            type: DataTypes.STRING(20),
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
        
    }, {
        timestamps: false,
    });
}