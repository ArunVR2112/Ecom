package emp.managemnet.demo.employee.dmo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import emp.managemnet.demo.employee.dmo.modal.Employee;

public interface Repository extends JpaRepository<Employee, Long>{
	
	

}
