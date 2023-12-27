package gmibank.stepdefinitions;

import gmibank.utilities.DataBaseUtility;
import io.cucumber.java.en.Given;

import java.util.List;

public class DatabaseStepDefinition {

    @Given("user connect database and print all data")
    public void user_connect_database_and_print_all_data() {

        DataBaseUtility.createConnection();

        String query = "SELECT * FROM public.tp_customer";
        List<Object> list = DataBaseUtility.getColumnData(query, "email");

        for(Object w : list){
            System.out.println(w.toString());
        }
    }


}
