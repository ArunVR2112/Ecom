package emp.managemnet.demo.employee.dmo.Service;

import java.util.List;

import emp.managemnet.demo.employee.dmo.dto.EmployeeDtp;

public interface EmployeeService {
	
	EmployeeDtp createEmp(EmployeeDtp empDto);
	EmployeeDtp getEmployeeById(long id);
	
	List<EmployeeDtp> getAllEmployee();
	
	EmployeeDtp updateEmployee(long id, EmployeeDtp empDto);
	
	void deleteEmployee(long id);

}
