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
- sudo dpkg -install <packagename>    # 安装
- sudo dpkg -remove <packagename>     # 删除
- dpkg -l                # 列出所有安装包
- dpkg -l | grep <xxx>   # 搜索指定安装包，使用pipe将前者的输出作为后者的输入
```

#### 3.1.2 存档

```shell
====== Windows ======
- Compress-Archive -Path <folder-to-compress> -DestinationPath <archive-name>.zip  # 压缩文件夹
- Expand-Archive -Path <archive-name>.zip -DestinationPath <extract-to-folder>    # 解压文件夹

====== Linux ======
- tar -czvf <archive-name>.tar <Path and folder-to-compress>  # 压缩文件夹
- tar -xzvf <archive-name>.tar -C <Path> # 解压文件夹到指定位置Path
```

#### 3.1.3 包依赖项

- DLL，Dynamic Link Library，动态链接库（共享库）

  > 是一种在 Windows 和 Linux 等操作系统中使用的软件组件，它允许多个程序共享相同的代码和数据，从而减少内存占用和提高系统性能

- Windows

  > 安装软件时，会自动安装其依赖项
  
  - MSI File， Microsoft installer package:是一种 Windows 安装程序文件，用于安装和配置软件。它包含了软件的安装程序、配置文件、组件和依赖项包括 DLL 等信息
  - SXS，Side-by-Side，侧载"是一种 Windows 组件模型，它允许在同一台计算机上安装多个版本的相同软件组件（共享库），而不会相互干扰。存储位置为 C:\Windows\WinSxS

- Linux
  > 安装独立包时，不会自动安装其依赖项，要么根据提示**手动依次安装依赖项（使用dpkg时）**，要么**使用包管理器自动安装（使用apt时）**

### 3.2 包管理器
- 包管理器
  - Linux系统上用于自动安装、管理和删除软件包的工具，对于不同的Linux发行版，有不同的软件包管理器，如Debian使用的dpkg和APT(advanced package tool)、CentOS使用的rpm等
  - Windows系统上自带PSGallery，但也可以使用第三方软件Chocolatey作为包管理器（更丰富），通过命令行进行软件包管理

- 使用dpkg时，将在后台运行以下两个命令之一
  - dpkg-deb：提供有关.deb文件的信息，并且可以打包和解压缩其内容
  - dpkg-query：用于查询.deb文件信息的后端工具

```shell
====== Linux ======
- sudo dpkg --install <packagename> # 安装软件包
- sudo dpkg --remove <packagename> # 删除软件包
- sudo dpkg --update-avail <packagename> # 更新本地软件包
- sudo dpkg --purge <packagename> # 卸载软件包，包括所有配置文件
- sudo dpkg --list # 列出所有已安装的软件包
- sudo dpkg --listfiles <packagename> # 列出软件包的所有文件
- sudo apt update # 更新软件包（仅检查更新元数据，而不执行下载）
- sudo apt upgrade # 运行新的软件包（执行更新软件包操作）
====== Windows ======
- Register-PackageSource -Name chocolatey -ProviderName Chocolatey -Location http://chocolatey.org/api/v2 # 将Chocolatey设置为软件包源，所有软件资源通过这个获取（不过Windows默认好像安装了这个）
- Get-PackageSource # 查看包管理器
- Find-Package -name <packagename> # 查找所有相关软件包源（从PSGallery和Chocolatey中）
- Install-Package -name <packagename> -Source <PSGallery/Chocolatey># 从指定的源中安装软件包
- Uninstall-Package -name <packagename> # 卸载软件包
```

### 3.3 设备软件管理

#### 3.3.1 设备驱动程序

- 驱动(driver)：用以硬件设备和操作系统交互 

- 管理驱动：
	- Windows：在cmd中使用 `devmgmt.msc` 打开设备管理器，`plug ang play(PnP)` 即插即用监视器，操作系统自动检测插入电脑的新的硬件设备，然后识别和安装相应的管理软件。类似键盘鼠标的外部设备接入后操作系统要求其插入 `devices hardware ID`，然后操作系统根据这个ID安装相应驱动
	- Linux：在 `/dev` 目录下为插入的硬件设备，Linux中任何东西都被视作文件，使用 `ls -l` 查看文件信息时，`d`表示目录、`-`表示普通文件，`c`表示按字节读取的character devices（鼠标键盘）、`b`表示按块读取的block devices（USB驱动或硬盘驱动）
- 更新驱动：
	- Windows：右键点击驱动设备菜单栏
	- Linux：设备驱动并不全部存储在 `/dev`目录下，有时部分存储在 `Linux Kernel(Linux内核)` 中，内核是真正的单体软件，内置许多硬件支持，当设备插入时会自动工作。部分未内置的设备可能是具有内核模块，可以像安装软件一样单独安装。（但**并非所有内核模块都是驱动程序**）

```shell
====== Linux ======
- ls /dev # 列出/dev中所有设备
- lcpci # 列出安装在PCI总线上的设备
- lsusb # 列出安装在USB总线上的设备
- lsscsi # 列出SCSI设备，例如硬盘驱动器
- dmesg # 列出内核识别的设备

====== Linux /dev =======
- /dev/sda # 第一个SCSI驱动器
- /dev/sr0 # 第一个光盘驱动器
- /dev/usb # USB设备
- /dev/usbhid # USB鼠标
- /dev/usb/lp0 # USB打印机
- /dev/null # 特殊文件，空设备，禁止输入输出，输出重定向时可以用于将数据彻底丢弃
```
	
#### 3.3.2 操作系统更新
- Windows10采用自动更新，`Security Patch(软件的一部分)` 用以修复安全漏洞
- Linux使用 `uname -r` 查看内核版本，使用 `sudo apt update` 和 `sudo apt full-upgrade`重启后完成更新
	> **Linux内核(kernel)是Linux操作系统的主要组件**，位于内存中，是硬件设备和其余进程之间的核心接口
	- 内存管理：跟踪存储的内容和位置以及内存使用情况
	- 进程管理：确定哪些进程可以使用和何时使用CPU，以及使用时长
	- 设备驱动：充当硬件和进程之间的解释器
	- 系统调用和安全：从进程接收服务请求
	
	
## 4 文件系统

### 4.1 文件系统检查
- 文件系统：用于跟踪磁盘上的文件和文件存储，帮助操作系统组织（有效访问）文件
	- Windows: 支持NTFS文件系统
	- Linux: 支持ext4文件系统
- FAT32：支持三个主要操作系统（Windows/Linux/MacOS）读取和写入数据的文件系统（因为NTFS和ext4在出除去各自操作系统之外的操作系统上兼容性很差）
	
#### 4.1.1 磁盘分区与格式化
- 集群、分区、卷
	> - **集群（分配单元大小）**allocation：指文件在卷或驱动器中可以占用的最小空间量。    
	>（例如，如果集群大小为 4kb（许多格式和大小的默认大小），而您尝试存储的文件为 4.1kb，则该文件将占用 2 个集群。这意味着驱动器实际上损失了 3.9 kb 的空间来用于单个文件）  
	> - ***分区**partition：同一物理存储磁盘，可以在逻辑上被分为独立的子磁盘（分区），不同的分区上可以安装不同的文件系统    
	> - **卷**volume：在分区上格式化文件系统后就变成卷，即卷是具有单个文件系统的单个可访问存储区域  
- 分区表
	> 说明系统光盘的分区构建方式，可以从哪些分区启动、分配给分区的空间量大小  
	> 两种主要的分区表方案：
	> - MBR(Master Boot Record)：传统分区方式，主要用于Windows，卷大小≤2TB，只有四个主分区Primary，可以在主分区下增加扩展分区extended、逻辑分区logical
	> - GPT(GUID Partition Table)：新型分区方式，卷大小≥2TB，只有一种类型分区Primary，可以任意分配
- 磁盘管理（分区/格式化）
	> Windows GUI - 此电脑 - 管理 - 存储 - 磁盘管理  
	> Windows CLI - 输入DiskPart，使用该工具  
	> Linux - 使用parted工具

```shell
====== Windosws ======
- Diskpart # 进入Disk管理工具
- list disk # 列出所有磁盘
- select disk 1 # 选中磁盘1
- clean # 清除磁盘内容
- create partition primary # 创建磁盘分区
- select partition 1 # 选中刚创建的磁盘分区
- active # 将该磁盘标为活动
- format FS=NTFS label=my-drive quick # 快速模式下（没有完整格式下的额外扫描磁盘是否有错误或损坏）使用NTFS格式化该驱动器，驱动器名为my-drive

====== Linux ======
- sudo parted -l # 列出连接到本计算机上的磁盘的基本信息
- sudo parted /dev/sdb # 对/dev/sdb磁盘使用parted工具
- print	# 在parted工具中列出该磁盘的所有信息
- mklabel gpt # 将该磁盘的分区方式partition table设置为gpt
- mkpart primary ext4 1MiB 5GiB	# 将该磁盘分出一个主分区primary，使用ext4文件系统，从1MB开始，到5GB结束
- quit # 退出parted工具
- sudo mkfs -t ext4 /dev/sdb1 # 将/dev/sdb的第1个分区格式化为ext4文件系统
- sudo umount /dev/sdb2 # 卸载该驱动
```


#### 4.1.2 挂载/卸载文件系统（mount/unmount）
- 挂载：将文件系统挂载到驱动器上，使计算机可以访问该驱动器
	> Windows中插入/弹出驱动器，操作系统自动将文件系统挂载在驱动器或从驱动器上卸载  
	> Linux中同上  
	> 显式挂载：将驱动器挂载到根目录下新创建的文件夹(**挂载点**)即可 `sudo mount <驱动器> <根目录下文件夹>`

> **在物理断开驱动器连接之前，请务必卸载驱动器的文件系统。 对于 USB 驱动器，如果我们不这样做，可能会遇到文件系统错误。**



### 4.2 交换
- 交换空间：计算机中的虚拟内存，当物理内存不足时，系统将不活跃的内存页面转移至此，避免系统崩溃，但访问速度低于物理内存
	> Windows：支持自动管理分页或手动设置初始值与最大值  
	> Linux：通过交换分区或文件实现，管理方式包括格式化交换分区mkswap、激活swapon、挂载配置/etc/fstab

```shell
====== Linux ======
- sudo parted /dev/sdb # 对/dev/sdb驱动器使用parted工具进行管理
- mkpart primary linux-swap 5GiB 100% # 将5GiB至剩余区域分区为交换空间
- quit # 退出parted工具
- sudo mkswap /dev/sdb2	# 将/dev/sdb的第2个分区格式化为交换空间
- sudo swapon /dev/sdb2 # 激活该交换空间

- sudo blkid # 查看存储设备ID（UUID）
- cat /etc/fstab # 开机自动挂载的配置文件。使用编辑器添加该分区的UUID，即可在开机后自动挂载
```

### 4.3 文件
#### 4.3.1 文件数据与文件元数据
- 文件数据：文件的实际内容，比如存储在硬盘驱动器的文本文档
- 文件元数据metadata：文件的其他所有内容，比如文件的所有者、权限、大小、**文件数据块在磁盘上的物理位置**

#### 4.3.2 Windows文件管理
- NTFS：Windows上使用NTFS文件系统格式，使用主文件表（Master File Table）在操作系统上存储和处理文件，主文件表中记录了文件的属性（文件名、创建时间戳、是否为只读...）
- 管理内容
	> - 创建文件：条目添加到MFT
	> - 删除文件：将条目标记为可用，再重复使用
	> - **文件记录号**：标识符，MFT中文件目录的索引
	> - 创建快捷方式：**仅仅引用了该文件**作为一个独立文件，内容是一个路径指针，移动/重命名原始文件快捷方式就会失效
    > - 创建符号链接：在MFT中创建了一个指向另一个**条目/文件名称**的条目，直接通过文件系统层面通往原始文件，移动/重命名原始文件时符号链接就会断裂，报错文件不存在
	> - 创建硬链接：**最底层的链接方式**，在MFT中创建了一个指向另一个**条目/文件的文件记录号**的条目，指向文件数据在硬盘上的存储位置，每个硬链接都是平等的，没有“原始文件”与“链接”之分。只要你还有任何一个硬链接存在，文件数据就不会被删除。只有删除所有指向该数据的硬链接，存储空间才会被释放。**只能用于文件，不能用于目录（避免循环引用）**

- 三种链接方式应用场景：
	> - 快捷方式：普通桌面用户使用
	> - 符号链接：软件开发部署、整理库文件
	> - 硬链接：备份文件防止误删、不想占用双重空间 

```shell
======= Windows ======
- mklink <符号链接文件名称> <源文件名称> # 创建符号链接
- mklink /H <符号链接文件名称> <源文件名称> # 创建硬链接
```

#### 4.3.3 Linux文件管理
- Inode：Linux上元数据和文件被组织成Inode结构，索引节点类似于Windows NTFS MFT，将Inode存储在Inodes表中
- 两种链接方式
	> - softlink：类似于Windows的快捷方式/符号链接
	> - hardlink：类似与Widnows的硬链接
- `-rw-rw-r-- 2 root root 0 Sep 9 5 16:09 file` 中 `2` 表示该文件的硬链接束

```shell
====== Linux ======
- ln -s <源文件名> <软链接名> # 创建软连接
- ln <源文件名> <软链接名> # 创建硬链接
```

	
### 4.4 磁盘使用情况

```shell
====== Linux ======
- df -u # 显示当前所在磁盘的使用情况
- df -h # 用可读方式显示所有磁盘使用情况
```


## 5 进程管理
- 进程：打开程序时就启动了进程
	- 可见进程：打开程序后，分配进程ID，内核决定为其分配资源
	- 后台进程（守护进程）：不可见的正在运行的进程
	
### 5.1 进程创建和终止
- 启动操作系统后的第一进程
	- Windows：`session manager subsystem（smss.exe）会话管理器子系统`，非内核进程，负责为操作系统设置一些东西，然后启动调用windlogon.exe的登录过程以及csrss.exe的客户端服务器运行子系统，处理运行Windows GUI和命令行控制台
	- Linux：`Init进程`是内核启动的第一个进程，进程号为1

- 进程创建机制：分为父进程、子进程
	- Windows：子进程从父进程中继承一些东西（环境：变量/设置），之后子进程的运行独立于父进程。
	> 比如打开命令行（父进程），从命令行中打开记事本（子进程），关闭命令行（父进程），记事本仍然运行（子进程独立运行）
	- Linux：每个进程都来自另一个进程，当进程完成任务后会自动终止，并释放其使用的所有资源到内核中
	
```shell
====== Windows ======
- taskkill /pid <进程号>	# 使用进程号关闭进程
```

### 5.2 读取进程信息
- Windows：`ctrl+shift+esc` 打开任务管理器 `taskmgr.exe`
- Linux：
	> PID：进程号  
	> TTY：与进程关联的终端  
	> STAY：该进程的状态(R：running；T：stopped；S：interruptible sleep)
	> TIME：进程占用CPU的总时间
	> COMMAND：正在运行的命令的名称
	> UID：启动该进程的用户ID
	> PPID：该进程的父进程ID
	> C：该进程拥有的子进程数
	> STIME：该进程开始时间

```shell
====== Windows ======
- tasklist	# 查看当前运行的所有进程
- Get-Process # 查看当前运行的所有进程

====== Linux ======
- ps -x		# 显示系统上当前运行进程的快照
- ps -ef	# 获取完整的所有进程（包括其他用户运行的）
- ps -ef | grep <进程名>	# 查看当前进程是否在运行
- ls -l /proc	# 查看进程对应的文件（Linux中任何内容都是一个文件，包括进程）
```

### 5.3 信号
- 信号：可以用来操纵进程
- SIGINT信号：最常见的信号之一，在Windows或者Linux上使用 `Ctrl+C` 将发送该信号到进程，用于终止进程

### 5.4 管理进程
- Windows进程管理工具：使用 `Process Explorer` 查看正在运行的进程
	- kill process tree：终止整个进程包括其子进程
	- restart：重启该进程，该进程将成为 `procexp.exe（进程资源管理器）` 的子进程
	- suspend：挂起该进程，即该进程不会消耗该进程在活动时使用的资源
- Linux管理流程：
```

```

### 5.5 资源监控



## 6 操作系统实践




