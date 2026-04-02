# DirectoryLock

**Package:** `net.minecraft.util`
**Type:** class
**Implements:** `AutoCloseable`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `LOCK_FILE` | `String` |  |

## Methods

### create

```java
public static DirectoryLock create(Path p_13641_)
```

**Parameters:**

- `p_13641_` (`Path`)

**Returns:** `public static DirectoryLock`

### DirectoryLock

```java
return new DirectoryLock()
```

**Returns:** `return new`

### DirectoryLock

```java
private DirectoryLock(FileChannel p_13637_, FileLock p_13638_)
```

**Parameters:**

- `p_13637_` (`FileChannel`)
- `p_13638_` (`FileLock`)

**Returns:** `private`

### close

```java
public void close()
```

### isValid

```java
public boolean isValid()
```

**Returns:** `public boolean`

### isLocked

```java
public static boolean isLocked(Path p_13643_)
```

**Parameters:**

- `p_13643_` (`Path`)

**Returns:** `public static boolean`

### try

```java
 try(FileChannel filechannel = FileChannel.open(path, StandardOpenOption.WRITE)
```

**Parameters:**

- `StandardOpenOption.WRITE` (`FileChannel filechannel = FileChannel.open(path,`)

**Returns:** ``

### LockException

```java
private LockException(Path p_13646_, String p_13647_)
```

**Parameters:**

- `p_13646_` (`Path`)
- `p_13647_` (`String`)

**Returns:** `private`

### alreadyLocked

```java
public static DirectoryLock.LockException alreadyLocked(Path p_13649_)
```

**Parameters:**

- `p_13649_` (`Path`)

**Returns:** `public static DirectoryLock.LockException`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `LockException` | class |  |
