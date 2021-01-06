package cn.edu.gench.dto.user;

import lombok.Data;
import lombok.Setter;

@Data
public class AddressDTO {

    private String userName;
    private String province;
    private String city;
    private String county;
    private String mobile;
    private String nationalCode;
    private String postalCode;
    private String detail;
}
