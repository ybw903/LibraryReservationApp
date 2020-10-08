module.exports = (sequelize, DataTypes)=>{
    return sequelize.define('reservation',{
        s_ID:{
            type: DataTypes.STRING(50),
            allowNull: false
        },
        seat_No: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Reservation_time:{
            type: DataTypes.DATE,
            allowNull: false
        },
        Finish: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
        
    }, {
        timestamps: false,
    });
}