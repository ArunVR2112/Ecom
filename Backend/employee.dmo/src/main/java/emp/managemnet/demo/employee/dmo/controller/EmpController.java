package emp.managemnet.demo.employee.dmo.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import emp.managemnet.demo.employee.dmo.Service.EmployeeService;
import emp.managemnet.demo.employee.dmo.dto.EmployeeDtp;
import lombok.AllArgsConstructor;

@CrossOrigin(origins = "http://localhost:3000")
@AllArgsConstructor
@RestController
@RequestMapping("/api/employee")
public class EmpController {

	private EmployeeService empService;
	
	@PostMapping
	public ResponseEntity<EmployeeDtp> createEmp(@RequestBody EmployeeDtp empdto){
		
		EmployeeDtp savedEmployee=empService.createEmp(empdto);
		return new ResponseEntity<EmployeeDtp>(savedEmployee,HttpStatus.CREATED);
		
	}
	
	
	@GetMapping("{id}")
	public ResponseEntity<EmployeeDtp> getEmployee(@PathVariable("id") long id){
		EmployeeDtp emp=empService.getEmployeeById(id);
		return ResponseEntity.ok(emp);
		
	}
	@GetMapping
	public List<EmployeeDtp> getAllEmpl(){
		return empService.getAllEmployee();
	}
	
	@PutMapping("{id}")
	public ResponseEntity<EmployeeDtp> updateEmployee(@PathVariable("id") long id, @RequestBody EmployeeDtp empDto){
		
		EmployeeDtp empD= empService.updateEmployee(id, empDto);
		return ResponseEntity.ok(empD);
		
	}
	@DeleteMapping("{id}")
	public ResponseEntity<String> deleteEmployee(@PathVariable("id") long id){
		empService.deleteEmployee(id);
		return ResponseEntity.ok("Employee Deleted Successfully");
		
	}
}
