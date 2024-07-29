-- Create a stored procedure to get average salary by department
CREATE PROCEDURE GetAverageSalaryByDepartment
    @DepartmentID INT,
    @AverageSalary DECIMAL(10, 2) OUTPUT
AS
BEGIN
    SELECT 
        @AverageSalary = AVG(salary)
    FROM 
        employee
    WHERE 
        department_id = @DepartmentID;
END;
