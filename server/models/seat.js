module.exports = (sequelize, DataTypes)=>{
    return sequelize.define('seat',{
        library_No:{
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: false
        },
        library_room_No: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        room_seat_No: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        reservation_check: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
        
    }, {
        timestamps: false,
    });
}