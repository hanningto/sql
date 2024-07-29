import { Router } from "express";
import { getAverageSalary } from "../controllers/salary.contollers.mjs";

const salaryRouter = Router()

salaryRouter.route('/average-salary/:id')
                .get(getAverageSalary)

export default salaryRouter