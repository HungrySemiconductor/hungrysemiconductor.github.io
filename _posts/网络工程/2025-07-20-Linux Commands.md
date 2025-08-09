---
title: Linux Commands
data: 2025-07-20
categories: [网络工程]
description: 针对文件与用户管理的Linux命令集合
tag: [Linux]
comments: true
---

# Linux 快速入门

## 参考资料

> Linux 是一个强大且开源的操作系统，本文使用 LabEx[^foot1]学习和练习 Linux 操作，目标是获得管理 Linux 操作系统和自动化任务的实际经验。
>
> `man <命令语句>`：对该命令的详细使用说明

## 注意点

> - Linux 命令大小写敏感
>
> - 注意空格

## 基础命令

- `echo`：重复语句

### 权限管理

- `whoami`：返回`username`，用于在不同机器或使用不同用户工作时查看用户名
- `id`：查看当前用户在哪个`groups`，`groups`决定了用户的权限和访问权

- `id root`：查看超级管理员，即系统的管理者

---

### 安装软件

- `sudo`：`SuperUser Do`，暂时使用超级管理员身份执行操命令
- `apt`：包裹管理工具，相当于手机上的应用商店
- `install` ：安装程序

> 先更新，再安装
>
> `sudo apt update`
>
> `sudo apt install xxx`

---

### 文件操作基础

> Linux 中几乎所有内容都被视为文件，所以操作文件是使用系统的基础
>
> **主目录**：`home directory`，一般表示为`~`

- `pwd`：`print working directory`，显示当前文件路径，在 Linux 文件结构中确定方向
- `echo ~`：显示`home directory`的路径
- `ls`：显示当前文件夹内的目录，`ls`表示`list`
- `ls ~`：显示`home directory`内的目录，`~`是主目录的一种快捷方式
- `ls -l`：显示详细文件目录信息，`l`表示`long format`
- `ls -a`：显示包含隐藏文件的目录，`a`表示`all`
- `ls -la`：显示所有文件目录的详细信息
- `ls -l 文件夹名`：显示该文件夹下的文件目录
- `ls -lR 文件夹名`：显示该文件夹下的所有文件和子文件夹中的内容，`R`表示`recursive`递归地
- `ls -ld 文件夹名`：显示文件夹本身的信息，`-d`表示仅仅列出文件夹自己

> Linux 使用的是一种`hierarchical - file system`，类似于一个有许多分支的大树 🌳
>
> **主干**：`root directory`，一般表示为`/`

- `cd 绝对路径`：移动到指定路径，`cd`表示`change directory`
- `cd ..` ：移动到上一个文件夹，`..`表示`the directory above`

> 创建文件和文件夹的几种方式

- `touch 文件名`：创建一个新的空文件，如果同名文件已经存在，则更新文件的时间戳而不改变其内容
- `echo "Hello, Linux" > file.txt`：创建一个带有内容的文件，如果同名文件已经存在，则更换其内容
- `echo "Hidden file" > .hiddenfile`：创建了一个隐藏文件，Linux 中任何一个文件或文件夹命名从点开始，则为隐藏文件
- `mkdir 文件夹名称`：创建一个新文件夹
- `mkdir -p 父文件夹/子文件夹`：`-p`表示在必要时创建父文件夹；如果缺少`-p`，当父文件夹不存在时，创建语句失败

> 复制文件和文件夹

- `cp 文件1 文件1_copy`：复制文件 1 到当前目录，并命名为文件 1_copy
- `cp 文件1 指定文件夹`：复制文件 1 到指定文件夹中
- `cp -r 文件夹1 文件夹1_copy`：复制文件夹到当前文件夹中，`r`表示`recursive`，为保证该文件夹下所有内容都被复制了。**如果文件夹 1_copy 存在，则该命令将复制文件夹 1 到文件夹 1_copy 目录中；如果文件夹 1_copy 不存在，则该命令将复制文件夹 1 到当前文件夹中并重命名为文件夹 1_copy**

> 移动和重命名文件和文件夹

- `mv 文件1 文件2`：重命名文件 1，更换为文件 2
- `mv 文件1 文件夹1`：将文件 1 移动到文件夹 1 中
- `mv 文件夹1 文件夹2`：重命名文件夹 1，更换为文件夹 2
- `mv 文件夹1/文件1 ./文件2`：将文件 1 从文件夹 1 中移动到当前文件夹，并重命名为文件 2

> 移除文件和文件夹，没有回收站所以`rm`命令删除的内容通常是永久性的，在执行命令前，请务必仔细检查！

- `rm 文件名`：直接删除
- `rm -i 文件名`：在删除前进行确认
- `rmdir 文件夹名`：只在文件夹为空的时候执行
- `rm -r 文件夹名`：可以删除不为空的文件夹
- `rm -rf 文件夹名`：强制执行删除命令，没有任何提示

---

### 输出文件内容

> 下文中将“文件路径”默认写作<path>

- `cat <path>`：打开文件内容
- `cat -n <path>`：输出带有行数字标识的内容，`n`表示`number`
- `head <path>`：默认输出文件前 10 行内容
- `head -n1 <path>`：输出文件前一行内容，`n2`表示输出前两行，...
- `head -c1 <path>`：输出文件前一个字节，`c`表示`character`，文件中 1 个字母为 1 个字节
- `tail <path>`：默认输出文件后 10 行内容
- `tail -n1 <path>`：输出文件后一行内容
- `tail -c1 <path>`：输出文件后一个字节，通常为空，因 i 最后一个字节可能是不可见的换行符

---

### 对比文件/文件夹

- `diff 文件1 文件2`：对比文件内容
- `diff -r 文件夹1 文件夹2`：对比文件夹内容，`r`表示`recursively`递归地将子文件夹进行比较

---

### Linux 中的权限

> 权限对于管理访问 Linux 系统上的文件和文件夹非常重要，包括对文件的读、写操作

> 查看文件的详细信息时（`ls -l 文件名`）
>
> `-rw-rw-r-- 1 labex labex 0 Jul 29 15:11 example.txt`
>
> - `-rw-rw-r--` ：`-`表示`普通文件`，`d`表示`文件夹`，`rwx`表示`read/write/execute`，分别表示对`owner/group/others`的权限
> - 数字`1`：硬链接数，对于`file`通常为 1，对于`directory`可能为别的数值
> - 第一个`labex`：该文件当前的 onwner 的`username`
> - 第二个`labex`：该文件当前的`group`，表示可以一起共享权限的集体
> - `0`：文件字节数
> - `Jul 29 15:11`：最后修改的时间
> - `example.txt` ：文件名

> `sudo`使用 root 权限运行命令，可能需要输入密码

- `chown <owner名称>:<group名称> <文件名称>`：同时修改文件的`user`和`group`，即`change ownership`

- `chown -R <owner名称>:<group名称> <文件夹名称>`：修改文件夹中的`user`和`group`，即`change

- `chmod <数字记号> <文件名称>`：更改文件/文件夹的权限，即`change mode`

  > 数字记号 numeric notation 的种类：
  >
  > 4：read
  >
  > 2：write
  >
  > 1：exectue
  >
  > 0：no permission
  >
  > - 例如数字记号`700`指的是 `-rwx------ `各自的累加
  >
  > owner：4r+2w+1e=7
  >
  > group：0r+0w+0e=0
  >
  > other：0r+0w+0e=0

  > 符号记号 symbolic notation 的种类：
  >
  > u：user（owner）
  >
  > g：group
  >
  > o：other
  >
  > a：all
  >
  > +：增加一个权限
  >
  > -：移除一个权限
  >
  > `r-read；w-write；x-execute`
  >
  > - 例如`chomod u+x 文件名称`指的是`为onwer增加一个执行权限`

---

### 修改用户信息

- `sudo useradd <用户名>`：添加一个新用户

- `sudo useradd -m <用户名>`：创建一个以用户名命名的 HomeDirectory，类似一个私有文件夹存储文件和设置

- `sudo grep -w '<用户名>' /etc/passwd`：显示一行用户名相关信息，用冒号隔开
- `sudo ls -ld </home/用户名 即homeDirectory>`：仅查看 homeDirectory 文件夹本身的信息

> 例如：`joker:x:5001:5001::/home/joker:/bin/sh`
>
> 用户名：joker
>
> 密码：x（通常存在别处）
>
> user ID：5001
>
> group ID：5001
>
> HomeDirectory：`/home/joker`（当使用-m 时创建）
>
> DefualtShell：`/bin/sh`

- `sudo passwd <用户名>`：更改用户密码，需要输入两次
- `sudo passwd -S <用户名>`：查看用户密码状态
- `sudo usermod -d <新的HomeDirectory> <用户名>`：修改 homeDirectory

> Linux 在后台将加密的密码存储在`/etc/shadow`中，而不是在每个人都可以找到的`/etc/passwd`中

> Linux 中可以修改的用户默认 shell，shell 是解释并运行你在终端输入的命令的程序。

- `sudo usermod -s /bin/bash <用户名>`：更改用户的 shell，从默认的 sh（Bourne Shell）变为 bash（Bourne Again Shell），使得命令语句更丰富

> 将新建的用户加入 sudo group，使得该用户可以使用 sudo 的权限，便于软件安装，配置修改和用户管理，仅仅输入该用户的密码就可以在不泄露 root 密码的时候使用部分权限，sudo 会记录谁运行了什么命令，提高安全性和可追踪性

- `sudo usermod -aG sudo <用户名>`：将用户添加到 sudo 的 group 中，`-aG`表示`append to group`
- `groups <用户名>`：列出包含该用户的所有 group
- `su - <用户名>`：将用户改为<用户名>的用户，需要输入创建该用户时设置的密码（当用户被禁用时无法更换）
- `sudo cat /etc/shadow`：可以作为切换用户后，检查权限是否提高的语句（原先为仅在 root 用户下才能执行的语句，查看完使用`exit`退出）
- `sudo passwd -l <用户名>`：暂时禁用该用户，`-l`表示`lock`
- `sudo passwd -u <用户名>`：解锁用户
- `sudo userdel <用户名>`：仅删除用户名，保留其 HomeDirectory
- `sudo userdel -r <用户名>`：删除用户及其 HomeDirectory，`del`表示`delete`，`-r`表示`remove`

## htop 工具

> 实时查看电脑运行状态，类似于仪表盘
>
> 顶部：CPU 和内存使用，电脑运行时常
>
> 中间：正在运行的程序，进程
>
> 底部：htop 中可操作的选项

- 先安装 htop 后，使用`htop`打开

- 使用`q`退出

![Desktop View](/img/2025-07-17/image02.png)

[^foot1]: [Linux Skill Tree Learning Path \| LabEx](https://labex.io/skilltrees/linux)

## 1 使用 Vim 和 Nano 编辑文件

### 1.1 Vim 编辑器

> 编辑器下方是状态栏
>
> Normal Mode：输入命令
>
> Insert Mode：输入文本

- `vi <文件名> `：创建一个新文件并使用 vim 编辑器打开(`Normal Mode`)
- 在编辑器中输入`i`切换到(`Insert Mode`)

- 在编辑器中输入`Esc`切换到(`Normal Mode`)
- 在命令前输入`:`

```bash
------确保在Normal Mode下，若不在使用Esc退出---------
:w 保存文件
:q 退出编辑器
:wq 保存并退出
gg 光标跳转到第一行第一个字符
h 左移一位
l 右移一位
j 下一行
k 上一行
G 最后一行
o 打开一个新行，并进入Inter Mode
/a 查询字符a
n 跳转到下一个查询的字符
dw 删除光标所在位置的word
:q! 退出vim并不保存所有修改，用于修改错误时退回
shift+两次z：保存文件并退出编辑器
```

- 直接输入`vimtutor`可以查看相关教程，大约花费 20-30min，可在`Normal Mode`下使用`:q!`安全退出

### 1.2 Nano 编辑器

> 与 Vim 不同，Nano 没有 Mode 切换，在底部有快捷按键，更加方便，`^`表示`Ctrl`

```bash
- Ctrl+A 光标回到当前行的第一个字符
- Ctrl+E ending
- Ctrl+W where
- Ctrl+_ 指定行
- Ctrl+O 保存文件，需要确认文件名称，点击Enter
- Ctrl+X 退出文件
```

---

## 2 管理 Shell 环境和配置

### 2.1 创建和区分局部变量和环境变量

> 在 Linux shell 中例如 Zsh，变量通常用于存储信息，两种主要的类型为
>
> **局部变量 local variable(or shell variable)**：尽在创建它的 Shell 中可用
>
> **环境变量 environment variable**：不仅在当前 shell 中可用，而且在从该 shell 启动的任何子进程中也可用

```bash
- <变量名>=<值>：创建了一个floser局部变量并赋值为rose，注意=不带空格
- export <变量名>=<值>：export命令会创建一个变量，并将其传递给当前shell的所有子进程，表示该变量为环境变量

- echo $<变量名>：验证局部变量是否成功创建，$表示使用过该变量的值替换该变量输出
- env | grep <变量名>：env列出所有环境变量，将输出结果传递给grep用来搜索指定的变量。如果无结果表示该变量为局部变量，如果输出为<变量名>=<值>格式，则为环境变量
```

### 2.2 子 shell 中测试变量和别名继承

> **子 shell**会继承环境变量
>
> 可以在子 shell 中测试变量，使用`echo $<变量名>`语句，如果是局部变量则输出为空，如果是环境变量则输出其值

```bash
- echo $$：查看当前parent shell的Process ID(PID)，Linux的每一个shell process都有一个唯一的PID
- zsh：在当前的shell中创建一个新的shell process
- ps -f：验证是否创建新的shell process，并显示详细信息，包括其parent process的PID(PPID)
- exit：从child shell中退出到parent shell
```

> **别名**是命令的快捷方式
>
> 别名与局部变量性质相同，**不会被子 shell 继承**

```bash
- alias ldetc='ls -ld /etc'：创建了一个ldetc别名，执行ls -ld /etc命令
- alias ldetc：验证是否创建成功，输出应为ldetc='ls -ld /etc'，表示列出/etc文件夹下的所有详细信息，可以直接使用ldetc验证该命令
- unalias ldetc：移除别名，再次输入ldetc时则不会返回任何值
```

### 2.3 控制自动变量导出

> `allexport`是 shell 内部的一个选项，可以使用命令语句控制它的开关
>
> `allexport`选项开启后，将使得创建的所有变量**自动变为环境变量，确保被子 shell 继承**

```bash
- set -o | grep allexport：查看当前allexport选项状态，列出所有shell options并使用grep过滤得到allexport选项状态
- set -o allexport：打开allexport选项
- set +o allexport：关闭allexport选项
```

### 2.4 永久化 Shell 自定义设置

> 在 shell 中设置的任何别名/函数/选项等，都是临时的，会在关闭终端时丢失，为永久保存他们，可以将所有设置添加到一个 shell 配置文件中
>
> `.bashrc`是一个 Bash shell 的配置文件，是一个每次 shell 打开后自动运行的脚本文件，可以存储个人设置，本文使用`.zshrc`文件进行实验
>
> `noclobber`选项防止在使用输出重定向时意外覆盖现有文件

```bash
- nano ~/.zshrc：使用nano编辑器打开配置文件，并在最后一行中添加set -o noclobber
- Ctrl+O：保存文件，再点击Enter
- Ctrl+X：退出文件
- set -o | grep noclobber：验证是否打开grep noclobber
- source ~/.zshrc：使当前shell读取并执行配置文件
- zsh：在子shell中使用set -o | grep noclobber测试是否跟随shell的打开而为永久打开
```

---

## 3 输入输出重定向

> 通过操作三个标准流，控制命令数据的流向，实现保存命令输出/管理错误信息/从文件获取输入
>
> **standard output(stdout)**
>
> **standard error(stderr)**
>
> **standard input(stdin)**

### 3.1 重定向 stdout 命令

> 在 Linux 中，大多数命令都会生成一些输出，默认为 stdout，显示在终端
>
> 也可以对一个文件使用`>`或者`>>`重定向这些输出，**用于保存命令结果/创建日志文件/生成报告**

```bash
- echo "Hello from LabEx"：仅仅将语句重复输出
- echo "Hello from LabEx" > hello.txt：将语句放进文件中，如果文件已经存在，则其内容会完全被重新覆盖，并且没有任何警告
- cat hello.txt：检查输出去向
- echo "Hello, This is the first line" > hello.txt：这该语句会覆盖原有文件的内容
- echo "Hello, This is a second line" >> hello.txt：该语句会追加到原有文件内容之后
```

> 创建一个日志文件，练习使用`>`和`>>`

```bash
- date > <文件名>.log：使用date语句添加日志文件的时间戳
- date >> <文件名>.log：在原有文件后追加时间戳
```

> 使用`tee`分词输出

```bash
ls /etc/ | tee etc_listing.txt：列出所有etc下子目录名称，并且将其分词写入etc_listing.txt中，tee会覆盖原有文件内容
date | tee -a etc_listing.txt：追加到文件后
```

### 3.2 重定向 stderr 命令

> 使用`2>`或`2>>`记录 Error 以供后续审核，而不会与 stdout 文件弄混
>
> 下面假设使用`ls`输出一个不存在的文件，将该命令输出的错误信息到日志文件中

```bash
- ls non_existent_file 2> error.log：在日志文件中记录ls命令输出的错误信息
- ls another_fake_file 2>> error.log：在日志文件中追加ls命令输出的错误信息
```

### 3.3 同时重定向 stdout 和 stderr

> 使用`&>`或`&>>`同时将输出和错误写进文件
>
> 在比较老的脚本中通常使用`> file 2>&1`或`>> file 2>&1`

```bash
- <命令语句> &> <文件名>.log：直接写入stdout和stderr，可能会覆盖
- <命令语句> &>> <文件名>.log：追加写入stdout和stder
```

### 3.4 重定向 stdin

> 使用`<`重定向 stdin，使得命令可以从文件中读取输入而不是从键盘上

---

## 4 管理用户信息

### 4.1 创建用户信息

> 用户相关信息需要`root privileges`

```bash
- sudo useradd -m <用户名>：创建一个新用户，-m表示同时创建用户的home directory
- sudo grep ^<用户名> /etc/passwd /etc/shadow /etc/group：验证是否创建成功，shadow文件夹只允许root privilege阅读，所以要使用sudo，将会输出User ID(UID)/Group ID(GID)
```

```bash
sudo grep ^<用户名> /etc/passwd /etc/shadow /etc/group的输出信息结构为：
- /etc/passwd:<用户名>:x:5001:5001::/home/student1:/bin/sh
x表示密码安全存储在shadow中
- /etc/shadow:<用户名>:!:20265:0:99999:7:::
！表示该用户暂未设置密码
- /etc/group:<用户名>:x:5001:
```

```bash
- sudo passed <用户名>：设置密码，需要输入两次无显示的密码
- sudo grep ^<用户名> /etc/shadow：查看密码信息，密码会被加密存储在shadow中
```

### 4.2 切换用户

```bash
- whoami：查看用户名
- echo $HOME：查看home directory
- pwd：查看当前工作路径
```

```bash
- su <要切换到的用户名>：su表示substitute user，此时命令行前的用户名将会切换为新用户名，但home directory没变
- su - <要切换到的用户名>：能够改变home directory到新用户下，-表示登录login标志，非常重要
- exit：退出当前用户
```

### 4.3 锁定用户

```bash
- sudo passwd -l <用户名>：锁定用户
- sudo passwd -u <用户名>：解锁用户
- sudo grep ^<用户名> /etc/shadow：查看用户密码，发现locked时加密密码前会有！，unlocked时没有！说明锁住的是密码
- su - <要切换到的用户名>：不能切换到锁定的用户
```

### 4.4 修改用户信息

```bash
- sudo chage -l <用户名>：查看用户修改信息及规则详情，chage表示change age
- sudo chage -M 90 -m 7 -W 14 student1：定期修改用户密码，每90天必须修改一次，修改必须间隔7天，密码到期前14天会被警告
```

```bash
- sudo groupadd <用户名>：新增group
- sudo usermod -aG <groupname> <用户名>：用户追加新的二级分组，如果不加a则会覆盖原有group信息
- id <用户名>：查看用户信息
- grep <groupname> /etc/group：查看group信息，输出格式为group_name:password_placeholder:group_id:members
- grep <username> /etc/username：查看用户所在的所有分组的详细信息
- groups <username>：查看用户所在的所有分组名，包括和以username命名的primary group
- sudo chown <username>:<groupname> <directory>：更换目录的ownership，如果不想改变username可以用省略不写
- sudo chgrp <groupname> <directory>：更换目录的ownership
```

### 4.5 删除用户信息

```bash
- sudo userdel <用户名>：将会删除用户信息，但不会删除home directory，使得可以在完全删除用户信息之前进行存档
- sudo grep ^<用户名> /etc/passwd：查看用户名是否删除成功，如果没有任何输出则删除用户名成功
- ls -ld /home/<用户名>：使用userdel后，用户的home directory仍旧存在，此时username和groupname都被换成了ID号，因为系统已经无法将ID与用户名相关联
```

```bash
- sudo userdel -r <用户名>：删除用户信息，包括其home directory和mail spool，注意这是完全且不可逆的删除操作！！！
```

```bash
- sudo groupdel <groupname>：删除组
- grep <groupname> /etc/group：查看是否删除成功，如果没有输出，则表示删除成功
```

---

## 5 管理文件和目录

> inode：使用数字对符号链接和硬链接指向磁盘上的相同数据进行唯一标识
>
> 符号链接：指向文件，但有自己唯一的 inode，**当文件删除时，符号链接断开，不在对应于存在的文件；若创建了同名的文件，则跟随新文件**
>
> 硬链接：指向文件 incode，所以硬链接与其指向的文件具有完全相同的 inode 号，硬链接数随着硬链接的创建而增加，**当文件删除时，硬链接指向的数据不会被删除；若创建了同名的文件，则不会跟随新文件**

> cp：复制文件是创建了新数据，inode 会变化
>
> mv：移动文件并没有创建新数据，inode 不会变
>
> 使用`cp -i <目标文件> <源文件>`：有覆盖提示，防止数据被重写

### 5.1 使用 vi 和 ln -s 创建文件和符号链接

```bash
- ln -s <文件名filea> <链接名fileb>：创建符号链接指向文件
- ls -il file[ab]：测试结果，-i表示显示inode号，文件与符号链接的indoe号不同
```

### 5.2 使用 ln 和 inodes 创建和分析硬链接

```bash
- ln <文件名> <硬链接名>：创建硬链接指向文件
- ls -il file[ab]：测试结果，-i表示显示inode号，文件与硬链接的indoe号相同
```

---

## 6 查找文件和命令

### 6.1 使用 find 命令

> `find <path> <expression>`：搜索文件
>
> `<path>`：从哪里开始搜索
>
> `<expression>`：定义要查找的内容，例如使用`-name`表示按照文件名搜索（区分大小），`-iname`不区分大小写的文件名搜索

```bash
- find . -name "<文件名>"：在.路径中，按文件名搜索
- find . -name "*.txt"：使用通配符搜索，查找所有以.txt扩展名结尾的文件，将递归地返回文件
- find . -type d：查找当前位置中的所有目录
- find . -type f：查找当前位置中的所有常规文件
- find . -type f -name "*.log"：查找所有以.log结尾的文件（非目录）
```

### 6.2 使用-exec 命令

> `find <path> <expression> -exec <command> {} \;`：为查找定位到的每个文件运行任意命令
>
> `command`：要运行的命令（如`ls -l`/`rm`/`chmod`）
>
> `{}`：一个特殊的占位符，`find`会将其替换为它找到的当前文件的完整路径
>
> `\;`：作为`-exec`命令必需的终止符

```bash
- find . -name "*.log" -ok rm {} \; 使用-ok确保删除安全，find会询问确认，输入y回车确认删除
- ls -R：通过列出目录内容验证文件是否被删除
```

### 6.3 使用 xargs 命令

> `xargs`是`-exec`的替代方法
>
> 将`find`的输出通过管道传递给`xargs`命令，再执行

```bash
- find . -name "*.log" | xargs ls -l：列出.log文件
- find . -name "*.log" | xargs -p rm：列出并确认删除.log文件
```

### 6.4 数据库驱动搜索

> `find`：搜索实时文件系统，更加可靠
>
> `locate`：搜索预先构建的文件路径数据库，速度更快，但只能找到数据库上次更新时存在的文件。由`mlocate`包提供，需要使用`sudo apt-get update && sudo apt-get install -y mlocate`安装

```bash
- locate <文件名>：直接查找文件
- sudo updatedb：如果没有输出则需要使用该命令手动更新重建数据库，此命令在后台运行，过几分钟在进行尝试查找即可，所以locate命令依赖于数据库新鲜度，需要经常手动更新
```

### 6.5 系统目录搜索

> 对于**个人文件或项目文件**，使用`find` or `locate`
>
> 对于查找**系统命令**，使用`whereis `
>
> `whereis`：用于定位命令的二进制文件、源代码和手册页文件的专用目录。可以处于任何目录进行搜索，但搜索局限于与系统命令相关的重要文件

```bash
- whereis passwd：输出命令名称+二进制可执行文件+相关手册页路径
- whereis -b passwd：输出命令名称+二进制文件路径
- whereis -m passwd：输出命令名称+man手册页路径
```

### 6.6 命令执行优先级

> Shell 特定的优先级顺序：先检查别名（aliases），后检查 shell 内建命令（shell built-in commands），最后搜索系统$PATH 中的目录以查找可执行文件
>
> 应用于当一个命令出现异常行为（别名导致命令失效）的情况，可使用`which`和`type`进行排查

```bash
- which <命令名称>：在$PATH环境变量列出的目录中查找可执行文件
- type <命令名称>：描述shell将如何解释命令名称
- type -a <命令名称>：按优先顺序排序显示该命令执行的完整层级结构
- alias pwd='date'：将pwd的功能重新定义为输出日期
- unalias pwd：删除别名的定义
```

---

## 7 搜索文件内文本

> `grep`命令用于在 Linux 系统中搜索文件内的文本，返回搜索结果

```bash
- grep <pattern> <path>：在filename中查找pattern
- grep -n <pattern> <path>：显示pattern所在filename的行数
- grep ^<pattern> <path>：^(cart)查找以某个pattern开始的结果
- grep <pattern>$ <path>：$查找以某个pattern结束的结果
```

### 7.1 BRE(Basic Regular Expressions)

> 微调输出结果，查找特定内容

```bash
- grep 'roo*' <path>`：输出结果带有`ro`或`roo`高亮
- `grep 'ro.' <path>`：输出结果带有`ro+任何字母`高亮
```

### 7.2 ERE(Extened Regular Expressions)

> 相较于 BRE 有更多查找方法

```bash
- grep -E 'o{2}' <path>：输出结果带有`oo`高亮
- grep -E 'root|Root' <path>：大小写都搜索
```

---

## 8 管理特殊权限

> 对于新建的文件，系统会设置默认权限，但这个权限过于宽泛，需要重新设置权限

```bash
---数字记号numeric notation的种类---
4：read
2：write
1：exectue
0：no permission
- 例如数字记号`700`指的是 `-rwx------ `各自的累加
owner：4r+2w+1e=7
group：0r+0w+0e=0
other：0r+0w+0e=0

---符号记号symbolic notation的种类---
u：user（owner）
g：group
o：other
a：all
+：增加一个权限
-：移除一个权限
`r-read；w-write；x-execute`
- 例如`chomod u+x 文件名称`指的是`为onwer增加一个执行权限`
```

> `umask=user file-creation mode mask`可以改变文件创建时的默认权限，该命令**移除(remove)**访问权限，表示文件或文件夹创建时，需要从基本权限中移除的权限

```bash
文件基本权限：666（rw-rw-rw-）
文件夹基本权限：777（rwxrwxrwx）
- 例如`umask 027`表示从基本权限中，user移除0个权限，group移除w权限，other移除所有权限，结果为（rw-r-----），那么之后创建文件时默认权限都为此时设置的该结果
```

> `sticky bit`确保文件或文件夹只能被文件或文件夹的**owner**或**root user**删除或重命名

```bash
- chmod 1771：第一个1表示设置sticky bit，711表示rwxrwx--t（其中t表示sticky bit）
```

---

## 9 创建和恢复备份档案

> `archive(归档) file`是一个包含多个其他文件和目录的单个文件，便于恢复和传输文件
>
> `tar(tape archiver)`是用于创建、查看和提取`archive files`的标准工具

```bash
- sudo tar -cvf ~/backup.tar /home：创建一个备份归档文件，备份home目录及其下所有文件
- c：create 创建一个新文档
- v：verbose 显示创建过程，列出添加的所有文件
- f：file 指定归档文件的名称
```

> 将创建的备份提取到另一个目录中，需要进入目的目录下，然后进行提取，恢复备份文件

```bash
- tar -svf ~/backup.tar：在另一个目录中，提取之前的备份文档，即home
- x：extract 提取文档从archive file中
- v：verbose 显示创建过程，列出添加的所有文件
- f：file 指定归档文件的名称
```
