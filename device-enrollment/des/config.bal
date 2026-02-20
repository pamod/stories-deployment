// Configuration for the device enrollment service

configurable int servicePort = 8080;

// MySQL database configuration
configurable string dbHost = "localhost";
configurable int dbPort = 3306;
configurable string dbUser = "<USER>";
configurable string dbPassword = "<PASS>";
configurable string dbName = "device_enrollment";

// Business logic configuration - maximum concurrent devices per user
configurable int maxLoginCount = 3;
