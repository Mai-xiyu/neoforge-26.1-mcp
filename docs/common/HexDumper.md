# HexDumper

**Package:** `net.neoforged.neoforge.common.util`
**Type:** class

## Description

Utility class for creating a nice human readable dump of binary data.
It might look something like this:<BR>
<PRE>
00 01 02 03 04 05 06 07 08 09 0A 0B 0C 0D 0E 0F    ................
69 68 67 66 65 64 63 62 61 61 6A 6B 6C 6D 6E 00    ihgfedcbaajklmn.
41 00                                              A.
Length: 34
</PRE>

## Methods

### dump

```java
public static String dump(ByteBuf data)
```

**Parameters:**

- `data` (`ByteBuf`)

**Returns:** `public static String`

### dump

```java
public static String dump(byte[] data)
```

**Parameters:**

- `data` (`byte[]`)

**Returns:** `public static String`

### dump

```java
return dump()
```

**Returns:** `return`

### dump

```java
public static String dump(byte[] data, int marker)
```

**Parameters:**

- `data` (`byte[]`)
- `marker` (`int`)

**Returns:** `public static String`

### Instance

```java
private Instance(int marked, int size)
```

**Parameters:**

- `marked` (`int`)
- `size` (`int`)

**Returns:** `private`

### add

```java
public void add(byte data)
```

**Parameters:**

- `data` (`byte`)

**Returns:** `public void`

### finish

```java
public String finish()
```

**Returns:** `public String`
