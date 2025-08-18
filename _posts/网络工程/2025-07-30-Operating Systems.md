---
title: Operating Systems
-data: 2025-07-30
categories: [网络工程]
description: OS命令行使用，文件与用户管理，软件与过程管理，操作系统实践
tag: [Windows PowerSell, Linux Bash, Linux]
comments: true
---

## 1 系统导航

> Shell 是命令行界面（CLI），为用户提供与操作系统交互的环境  
> Bash 是 Shell 的一种具体实现，是 Linux 系统的默认 Shell

### 1.1 目录操作

#### 1.1.1 查看目录

> Windows 使用反斜杠 `\` 表示文件路径分隔符，使用 `/` 表示命令行参数前缀
> Linux 使用正斜杠 `/`

```shell
====== Windows ======
- ls \              # 列出根目录下的所有内容
- ls -Force <path>  # 列出指定目录下包含隐藏文件的所有内容
- Get-Help ls       # 查看ls命令的帮助
- Get-Help ls -Full # 查看ls命令的详细帮助

====== Linux ======
- ls /              # 列出根目录下的所有内容
- ls -l -a <path>   # 列出指定目录下包含隐藏文件的所有内容的详细信息
- man ls            # 查看ls命令的帮助
- ls --help         # 查看ls命令的帮助
```

#### 1.1.2 更改目录

> Windows 使用 tab 键可以自动补全路径名称，再次按下可以轮换选项  
> Linux 输入开头字母，按两次 tab 键会列出所有匹配的选项

> Windows: `~` 为主目录 `C:\Users\Username`  
> Linux: `~` 为主目录 `/home/username`

```shell
====== Windows/Linux ======
- pwd               # 显示当前目录
- cd <path>         # 切换到指定目录
- cd ..             # 切换到上一级目录
- cd .. <path>      # 切换到指定目录的上一级目录
- cd ~              # 切换到用户主目录
```

#### 1.1.3 创建目录

> Windows 在空格前使用转义字符 \` 可以创建名称带有空格的目录  
> Linux 在空格前使用转义字符 \ 可以创建名称带有空格的目录

```shell
====== Windows/Linux ======
- mkdir <filename>      # 在当前目录下直接创建一个新目录
- mkdir 'my new folder' # 使用单引号创建名称带有空格的目录
```

#### 1.1.4 命令历史记录

```shell
====== Windows/Linux ======
- history             # 显示命令历史记录
- history <number>    # 显示最近n条命令历史记录
- history -c          # 清除命令历史记录

- Ctrl + R            # 搜索历史记录，按tab键确定内容
- clear               # 清除屏幕上的输出
```

#### 1.1.5 复制文件和目录

> 使用通配符 `*` 可以选中指定类型的所有文件或目录，减少重复操作

```shell
====== Windows ======
- cp <source> <destination>                     # 复制文件或目录到指定位置（该命令复制的目录不包含内容）
- cp <source> <destination> -Recurse -Verbose   # 复制目录及其内容到指定位置，-Recurse 表示递归复制，-Verbose 表示显示操作的详细信息
- cp *.<type> <destination>                     # 复制指定类型的所有文件到指定位置

====== Linux ======
- cp <source> <destination>                     # 复制文件或目录到指定位置（该命令复制的目录不包含内容）
- cp <source> <destination> -r                  # 复制目录及其内容到指定位置，-r 表示递归复制
- cp *.<type> <destination>                     # 复制指定类型的所有文件到指定位置
```

#### 1.1.6 移动和重命名文件和目录

> mv 操作不需要-r 递归处理，因其只是修改了目录指向，目录内部结构保持不变，不涉及 cp 和 rm 操作，无需逐级操作

```shell
====== Windows ======
- mv <name1> <name2>                            # 重命名文件/目录名称，不改变所处位置
- mv <source> <destination>                     # 移动文件或目录到指定位置（该命令移动的目录包含内容）
- mv *.<type> <destination>                     # 移动指定类型的所有文件到指定位置

====== Linux ======
- mv -i <name1> <name2>                         # 重命名文件/目录名称，不改变所处位置，-i 表示交互模式，会提示是否覆盖
                                                # 如果确认覆盖，输入 y，否则输入 n，按回车键继续
- mv <source> <destination>                     # 移动文件或目录到指定位置（该命令移动的目录不包含内容）
- mv *.<type> <destination>                     # 移动指定类型的所有文件到指定位置
```

#### 1.1.7 删除文件和目录

> Linux 删除文件或目录时不会提示是否确认，且没有回退，要谨慎使用，避免误删重要文件  
> 当文件提示不能够删除时，可能是用户权限不够，也有可能是该文件是系统文件，或正在被进程使用的文件

```shell
====== Windows ======
- rm <name>                     # 删除文件或目录，该命令删除时会提示是否确认删除目录中的内容
- rm <name> -Force              # 强制删除文件或目录，不提示是否确认
- rm <name> -Recurse -Verbose   # 删除目录及其内容，-Recurse 表示递归删除，-Verbose 表示显示操作的详细信息

====== Linux ======
- rm <name>                     # 删除文件或目录，该命令没有提示，且不能够删除目录
- rm -r <name>                  # 删除目录及其内容，-r 表示递归删除
```

### 1.2 文件操作

#### 1.2.1 查看文件

```shell
====== Windows ======
- cat <file>                    # 查看文件内容
- more <file>                   # 分页查看文件内容，按回车键看下一行，按空格键查看下一页，按q键退出
- cat <file> -Head <number>     # 查看文件前n行内容
- cat <file> -Tail <number>     # 查看文件后n行内容

====== Linux ======
- cat <file>                    # 查看文件内容
- less <file>                   # 分页查看文件内容，按上下键滚动，按g移动到首行，按G移动到尾行，使用/word可以搜索内容，按q键退出
- head <file>                   # 查看文件前10行内容
- tail <file>                   # 查看文件后10行内容
- head -n <number> <file>       # 查看文件前n行内容
- tail -n <number> <file>       # 查看文件后n行内容
```

#### 1.2.2 修改文件

```shell
====== Windows ======
- start notepad++ <file>                # 使用notepad++打开文件进行编辑

====== Linux ======
- nano <file>                           # 使用nano编辑器打开文件进行编辑
```

#### 1.2.3 搜索文件

```shell
====== Windows ======
- sls <string> <*.type>               # 在指定类型文件中搜索字符串，将返回带有该字符串的文件名、行号、句子
- ls <path> -Recurse -Filter <.*type> # 递归地列出指定目录下指定类型的所有文件

====== Linux ======
- grep <string> file                  # 在指定文件中搜索字符串
- grep <string> <*.type>              # 在指定类型文件中搜索字符串，将返回带有该字符串的文件名、句子
```

#### 1.2.4 输入输出重定向

> 使用 pipeline `|` 将多个命令串联起来，可以将一个命令的输出作为另一个命令的输入，实现数据流处理

> stdout 使用>>追加输出，避免覆盖原文件  
> stderro 使用 2>>追加错误，避免覆盖原文件  
> stdin < 输入文件 **cat 是 stdin 的典型代表，读取文件内容**

```shell
====== Windows/Linux ======
- <command> > <file>                  # 将命令的输出重定向到指定文件
- <command> >> <file>                 # 将命令的输出追加到指定文件
- <command> 2> <file>                 # 将命令的错误输出重定向到指定文件
- <command> 2>> <file>                # 将命令的错误输出追加到指定文件
- cat <file> | grep <string> > <file2> # 将cat命令的输出作为grep命令的输入，将grep命令的输出重定向到指定文件
```

## 2 用户和权限

### 2.1 用户和组

#### 2.1.1 查看用户信息

> standard user: 普通用户，默认用户，具有基本的文件和目录操作权限，不能执行特权命令，也不能修改系统配置文件  
> Windows 中：  
> administrator: 管理员用户，具有所有权限，可以执行特权命令，也可以修改系统配置文件  
> User Account Control(UAC): 用户账户控制，用于限制普通用户的权限，只有管理员用户可以执行特权命令
> Linux 中：  
> root: 超级用户，具有最高权限，可以执行任何操作，也可以修改任何文件和目录
> sudo: 超级用户权限，用于限制普通用户的权限，只有 root 用户可以执行 sudo 命令，sudo 命令可以执行特权命令

```shell
====== Windows ======
- Get-LocalUser                     # 查看计算机上所有的本地用户
- Get-LocalGroup                    # 查看计算机上所有的本地组
- Get-LocalGroupMember <Groupname>  # 查看指定组的所有成员

====== Linux ======
- sudo cat /etc/sudoers             # 查看sudoers文件，该文件包含了哪些用户可以执行sudo命令
- sudo su - <username>              # 切换到指定用户，username为空时切换到root用户，使用exit退出
- cat /etc/groups                   # 查看groups文件，该文件包含了哪些用户属于哪些组
- cat /etc/passwd                   # 查看passwd文件，该文件包含了哪些用户的信息
```

#### 2.1.2 设置密码

```shell
====== Windows ======
- net user /?                        # 查看net user命令的帮助
- net user <username> <password>     # 设置用户密码，password为空时删除用户密码
- net user <username> *              # 避免明文密码，使用*代替密码
- net user <username> /logonpasswordchg:yes # 强制用户在下次登录时修改密码，避免管理员获取用户密码

====== Linux ======
- passwd <username>                  # 修改用户密码
- sudo passwd -e <username>          # 强制用户在下次登录时修改密码，避免管理员获取用户密码
```

#### 2.1.3 管理用户

```shell
====== Windows ======
- net user <username> <password> /add /loggonpasswordchg:yes  # 添加用户，设置密码，并在下一次登录时强制该用户修改密码
- Get-LocalUser                     # 检查是否添加成功

====== Linux ======
- sudo useradd <username>           # 添加用户
- sudo userdel <username>           # 删除用户
- cat /etc/passwd                   # 检查是否添加成功
```

### 2.2 权限和访问控制

> 权限是计算机安全的重要组成部分

#### 2.2.1 查看权限

> Windows:  
> Access Control Lists(ACLs)：自主访问控制列表，分配文件和目录权限

```shell
====== Windows ======
- icacls Desktop     # 查看当前用户的权限，improved change ACLs
- icacls /?          # 查看icacls命令的帮助文档

====== Linux ======
- ls -l <folder/filename>  # 查看当前用户对文件或目录的权限
```

#### 2.2.2 修改权限

```shell
====== Windows ======
- icacls 'path' /grant 'groupname:(perimission such as CI/OI/R/W/X/F...)(...)'   # 添加指定群组权限
- icacls 'path' /remove 'groupname:(perimission such as CI/OI/R/W/X/F...)(...)'  # 移除指定群组权限

====== Linux ======
- chmod u+rwx <folder/filename>    # 为该文件的'用户'添加'读、写、执行'功能
- chmod u-rwx <folder/filename>    # 为该文件的'用户'移除'读、写、执行'功能
- chmod g+rw  <folder/filename>    # 为该文件的'群组'添加'读、写'功能
- chmod o+r   <folder/filename>    # 为该文件的'其他用户'添加'读'功能
- chmod ugo+x <folder/filename>    # 为该文件的'用户、群组、其他用户'添加'执行'功能
- chmod 754 <folder/filename>      # r-5,w-4,x-1；为该文件的不同用户一次性添加不同权限

- sudo chown <username> <folder/filename>   # 更改文件所属用户
- sudo chgrp <groupname> <folder/filename>  # 更改文件所属群组
```

#### 2.2.3 特殊权限

> 在 Linux 和 Windows 系统中，除了基本的读（R）、写（W）、执行（X）权限外，还有一些特殊权限用于更精细的访问控制

```shell
====== Windows ======
1. 完全控制（Full Control）：允许所有操作（包括修改权限）。
2. 遍历文件夹/执行文件（Traverse Folder / Execute File）：允许进入目录或运行程序。
3. 读取权限（Read Permissions）：仅查看权限，不能修改。
4. 更改权限（Change Permissions）：可以修改 ACL。
5. 取得所有权（Take Ownership）：可以夺取文件所有权（类似 Linux 的 chown）。
6. 特殊权限（Special Permissions）：更细粒度的控制（如仅允许删除子文件）。

====== Linux ======
1. SetUID(SUID)：文件设置了该权限时，执行该程序的用户会临时获得文件所有者的权限（通常是root）
2. SetGID(SGID)：类似SUID，针对组
3. Sticky Bit：文件设置了该权限时，仅允许文件所有者mv/rm自己的文件

- chmod u+s /path/to/file   # 设置SUID
- chmod 4755 /path/to/file  # 4表示SUID，755仅为示例

- chmod g+s /path/to/file   # 设置SGID
- chmod 2755 /path/to/file  # 2表示SGID，755仅为示例

- chmod +t /path/to/file   # 设置Sticky Bit
- chmod 1755 /path/to/file  # 1表示Sticky Bit，755仅为示例
```

## 3 软件包和软件管理

### 3.1 软件包

#### 3.1.1 软件包

```shell
====== Linux ======
- sudo dpkg -i <xxx.deb> # 安装Debian版本软件
- sudo dpkg rm <xxx>     # 删除安装包
- dpkg -l                # 列出所有安装包
- dpkg -l | grep <xxx>   # 搜索指定安装包，使用pipe将前者的输出作为后者的输入
```

#### 3.1.2 存档

#### 3.1.3 包依赖项

### 3.2 包管理器

### 3.3 设备软件管理

#### 3.3.1 设备和驱动程序

#### 3.3.2 操作系统更新

## 4 文件系统

## 5 过程管理

## 6 操作系统实践
