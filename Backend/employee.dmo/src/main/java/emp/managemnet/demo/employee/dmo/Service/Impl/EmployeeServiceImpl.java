package emp.managemnet.demo.employee.dmo.Service.Impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import emp.managemnet.demo.employee.dmo.Mapper.EmployeeMapper;
import emp.managemnet.demo.employee.dmo.Service.EmployeeService;
import emp.managemnet.demo.employee.dmo.dto.EmployeeDtp;
import emp.managemnet.demo.employee.dmo.excption.ResourceNotFoundExecption;
import emp.managemnet.demo.employee.dmo.modal.Employee;
import emp.managemnet.demo.employee.dmo.repository.Repository;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class EmployeeServiceImpl implements EmployeeService {
	
	
	
	@SuppressWarnings("unused")
	private Repository employeeRepository;


	@Override
	public EmployeeDtp createEmp(EmployeeDtp empDto) {
		
		
		Employee emp=EmployeeMapper.mapToEmployee(empDto);
		Employee savedEmp=employeeRepository.save(emp);
		
		
		
		return EmployeeMapper.mapToEmployeeDto(savedEmp);
	}

	@Override
	public EmployeeDtp getEmployeeById(long id) {
		Employee get= employeeRepository.findById(id).orElseThrow(()->new ResourceNotFoundExecption("Provided Id not found"+id));
		return EmployeeMapper.mapToEmployeeDto(get);
	}

	@Override
	public List<EmployeeDtp> getAllEmployee() {
		
		List<Employee>emp= employeeRepository.findAll();
		return emp.stream().map((empl-> EmployeeMapper.mapToEmployeeDto(empl))).collect(Collectors.toList());
	}

	@Override
	public EmployeeDtp updateEmployee(long id, EmployeeDtp empDto) {
		Employee emp=employeeRepository.findById(id).orElseThrow(()->new ResourceNotFoundExecption("Id not Found"+id));
		
		emp.setName(empDto.getName());
		emp.setEmail(empDto.getEmail());
		emp.setPswd(empDto.getPswd());
		Employee updateEmp= employeeRepository.save(emp);
		return EmployeeMapper.mapToEmployeeDto(updateEmp);
	}

	@Override
	public void deleteEmployee(long id) {
		// TODO Auto-generated method stub
		Employee emp=employeeRepository.findById(id).orElseThrow(()->new ResourceNotFoundExecption("Id not Found"+id));
		employeeRepository.deleteById(id);
		
		
	}




}
