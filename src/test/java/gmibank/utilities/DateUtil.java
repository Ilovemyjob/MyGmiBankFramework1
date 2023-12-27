package gmibank.utilities;

import java.text.SimpleDateFormat;
import java.util.Date;

public class DateUtil {
    // MMMM dd, yyy  --> Nowember 15, 2020
    public static String todaysDate(){
        String today = new SimpleDateFormat("MMMM dd, yyy").format(new Date());
        return today ;
    }
    // MM-dd-yy     --> 11-15-20
    public static String todaysDate2(){
        String today = new SimpleDateFormat("MM-dd-yy").format(new Date());
        return today ;
    }
    // dd-MM-yy    --> 15-11-20
    public static String todaysDate3(){
        String today = new SimpleDateFormat("dd-MM-yy").format(new Date());
        return today ;
    }
    // yyyy-MM-dd hh:mm:ss   --> 2020-11-15 08:25:17
    public static String todaysDate4(){
        String today = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss").format(new Date());
        return today ;
    }
}
