# CloudBeaver Community

<img src="https://github.com/dbeaver/cloudbeaver/wiki/images/cloudbeaver-logo.png" width="250"/>

Cloud Database Manager - Community Edition.  
CloudBeaver is a web server which provides rich web interface. Server itself is a Java application, web part is written on TypeScript and React.  
It is free to use and open-source (licensed under [Apache 2](https://github.com/dbeaver/cloudbeaver/blob/devel/LICENSE) license).  
See out [WIKI](https://github.com/dbeaver/cloudbeaver/wiki) for more details.  

![](https://github.com/dbeaver/cloudbeaver/wiki/images/demo_screenshot_1.png)

## Run in Docker

- [Official Docker repository](https://hub.docker.com/r/dbeaver/cloudbeaver)
- [Running instructions](https://github.com/dbeaver/cloudbeaver/wiki/Run-Docker-Container)

## Demo server

You can see live demo of CloudBeaver here: https://demo.cloudbeaver.io  

[Database access instructions](https://github.com/dbeaver/cloudbeaver/wiki/Demo-Server)

## Changelog

### Changes since 23.2.0: 

- Security:
   - Unauthorized access vulnerability was fixed;
   - All embedded drivers are disabled by default. Administrators can re-enable them in the Server configuration.
- Access Management:
   - Administrators have gained the ability to permanently delete users and their data.
- Authorization:
   - The SSL option is available for establishing a connection in SQL Server.
- Connections:
   - The 'Save credentials' checkbox has been removed from a template creating form as credentials are not stored in templates.
- SQL Editor:
   - Support for using custom delimiters has been added in MySQL;
   - The Output tab has been implemented, which includes warnings, info, and notices generated by the database when executing user queries;
   - Fixed an issue in the SQL editor where it was impossible to switch the active schema when working with Oracle databases;
   - Added ability to select shared connections for private scripts;
   - Private connections can be chosen for shared scripts, but this change won’t be saved to the script file.
- Data Editor:
   - Scrollbars have been made theme-independent;
   - Added the ability to edit binary values in a table;
   - Added the ability to count the total number of entries in the table.
- Driver management:
   - Updated the version of the Clickhouse driver to 0.4.6.
- Many small bug fixes, enhancements, and improvements have been made

### Old CloudBeaver releases

You can find information about earlier releases on the CloudBeaver wiki https://github.com/dbeaver/cloudbeaver/wiki/Releases.

