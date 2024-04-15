import axios from "axios";

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:"Bearer 4WnYf9eBCLHWUqP_RkBO3TH8ruseQPz9ulJ28DxGH6K4yuLAiRLUpjXSVuusGz4IU6qs87-KzoAEI4zwIEVHoB8_u-saOh9Padzh_Giz4J-O9MHGVP_g_OnjksrtZXYx"
    }
})