// const { DataTypes } = require('sequelize')
import { DataTypes } from 'sequelize'

// import db from '../../../../back-end/db'
const db:any = {}

const Task = db.define('Task', {
    title: DataTypes.STRING,
    due_date: DataTypes.DATEONLY,
    status: DataTypes.ENUM
})