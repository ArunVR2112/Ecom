package emp.managemnet.demo.employee.dmo.Mapper;

import emp.managemnet.demo.employee.dmo.dto.EmployeeDtp;
import emp.managemnet.demo.employee.dmo.modal.Employee;

public class EmployeeMapper {
	
	public static EmployeeDtp mapToEmployeeDto(Employee employee) {
		
		return new EmployeeDtp(
				employee.getId(),
				employee.getName(),
				employee.getEmail(),
				employee.getPswd()
				);
		
	}
	
	public static Employee mapToEmployee(EmployeeDtp empDto) {
		return new Employee(
				empDto.getId(),
				empDto.getName(),
				empDto.getEmail(),
				empDto.getPswd()
				);
		
	}

}
