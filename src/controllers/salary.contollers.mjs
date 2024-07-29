import sql from 'mssql'

import { dbConfig } from "../dbConfig.mjs";
import { poolPromise } from "../dbConfig.mjs";

export const getAverageSalary = async(req, res) => {
    const {params: {id}} = req
    const departmentId = parseInt(id)

    try {
        const pool = await poolPromise
        const request = pool.request()
        request.input('DepartmentId', sql.Int, departmentId)
        request.output('AverageSalary', sql.Decimal(10,2))

        const result = await request.execute('GetAverageSalaryByDepartment')

        res.json({AverageSalary: result.output.AverageSalary})
        

    } catch (error) {
        console.error('SQL error', err);
        res.status(500).send('Server error');
    }
}