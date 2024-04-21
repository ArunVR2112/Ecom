package emp.managemnet.demo.employee.dmo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
@AllArgsConstructor
public class EmployeeDtp {
	
	private long id;
	private String name;
	private String email;
	private String pswd;

}
