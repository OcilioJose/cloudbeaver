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

### 24.1.5. 2024-08-19
- Added right-click support to open the context menu in the Metadata Editor
- The list of forbidden characters for naming and renaming files has been updated, now it includes the following characters: / : " \ ' <> | ? *
- Many minor bug fixes, enhancements, and improvements have been made

### 24.1.4. 2024-08-05
- Redesigned administration navigation panel - now it is more compact and clear;
- Added the ability to close editor tabs with the middle mouse button;
- Improved display of the long error messages in the SQL Editor and Log viewer;
- SQL Editor auto-completion was enhanced to get column, table, and function names faster.
  
### 24.1.3. 2024-07-22
- Data Editor:
  -    Enhanced IPv6 and DateTime32 data representation for Clickhouse;
  -    Data editing was fixed for DuckDB;
- SQL Editor:
  -    We changed the save script icon to a floppy disk for better recognition;
  -    The 'Use long objects names' preference behavior was enhanced for auto-completion actions;
- DDL generation for Oracle Tablespaces was added (thanks to @pandya09);
- Many minor bug fixes, enhancements, and improvements have been made.

### 24.1.2. 2024-07-08
- Added the ability to change the default commit mode for each connection separately;
- Added additional notifications about restricted operations;
- Improved application behavior when closing a connection - open editors won't be closed on disconnect;
- Added the "Keep alive" setting for Db2 LUW and IMB i, Apache Kyuubi, Clickhouse, Firebird and Trino;
- Fixed the dollar-quoted string parsing in the SQL editor for PostgreSQL;
- Many minor bug fixes, enhancements, and improvements have been made.
  
### 24.1.1. 2024-06-24
- Unauthorized access vulnerability was fixed;
- French language support was added (thanks to @matthieukhl);
- Updated Firebird driver to version 5.0.4;
- Many minor bug fixes, enhancements, and improvements have been made.

### 24.1.0. 2024-06-03
### Changes since 24.0.0:
- General:
  -    Added the ability to back up the internal database before schema migration (for H2 and PostgreSQL)
  -    The process of application update has improved - you can track the application update process now;
  -    Added the ability for users to configure personal settings for the interface, SQL editor, and data viewer through the settings panel
  -    All popup dialogs became available for screen readers, including JAWS, to improve the experience for users with disabilities;
- User authorization:
  -    Security for unauthorized access enhanced;
  -    Added LDAP authentication;
- Data viewer and SQL editor:
  -    Added support for manual and automatic modes for committing changes to the database
  -    Large text values (more than 100 Kb) are now automatically opened in the Value panel;
  -    Row count calculation in the grid can be canceled for Data Editor and SQL Editor;
  -    Added the ability to set null values for BLOB and GIS data via the cell's context menu in the table;
  -    Added spatial data visualization for DuckDB;
  -    Aliases autocompletion fixed for DuckDB;
  -    Procedure creation query recognition fixed for DB2i.
- Connection settings:
  -    Implemented support for utilizing environment variables within connection configurations;
- Data transfer:
  -    Added the ability to import data to the database from CSV file;
  -    Added the ability to select a case for column names for export to CSV;
- Databases:
  -    Added a new Apache Kyuubi driver (thanks to @pan3793);
  -    Enhanced security for connection through H2 driver;
  -    DuckDB driver updated to version 0.10.2;
  -    Oracle driver updated to version 23.2.0.0;
  -    SQLite driver updated to version 3.44.1.0;
  -    Clickhouse driver updated to version 0.6.0-patch2;
  -    Trino driver updated to version 438 (thanks to @alaturqua).

