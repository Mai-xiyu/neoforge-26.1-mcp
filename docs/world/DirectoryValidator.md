# DirectoryValidator

**Package:** `net.minecraft.world.level.validation`
**Type:** class

## Methods

### DirectoryValidator

```java
public DirectoryValidator(PathMatcher p_294971_)
```

**Parameters:**

- `p_294971_` (`PathMatcher`)

**Returns:** `public`

### validateSymlink

```java
public void validateSymlink(Path p_289934_, List<ForbiddenSymlinkInfo> p_289972_)
```

**Parameters:**

- `p_289934_` (`Path`)
- `p_289972_` (`List<ForbiddenSymlinkInfo>`)

**Returns:** `public void`

### validateSymlink

```java
public List<ForbiddenSymlinkInfo> validateSymlink(Path p_295438_)
```

**Parameters:**

- `p_295438_` (`Path`)

**Returns:** `public List<ForbiddenSymlinkInfo>`

### validateDirectory

```java
public List<ForbiddenSymlinkInfo> validateDirectory(Path p_294195_, boolean p_295763_)
```

**Parameters:**

- `p_294195_` (`Path`)
- `p_295763_` (`boolean`)

**Returns:** `public List<ForbiddenSymlinkInfo>`

### IOException

```java
throw new IOException("Path " + p_294195_ + " is not a directory")
```

**Parameters:**

- `directory"` (`"Path " + p_294195_ + " is not a`)

**Returns:** `throw new`

### validateKnownDirectory

```java
public void validateKnownDirectory(Path p_294739_, List<ForbiddenSymlinkInfo> p_295266_)
```

**Parameters:**

- `p_294739_` (`Path`)
- `p_295266_` (`List<ForbiddenSymlinkInfo>`)

**Returns:** `public void`

### validateSymlink

```java
private void validateSymlink(Path p_289935_, BasicFileAttributes p_289941_)
```

**Parameters:**

- `p_289935_` (`Path`)
- `p_289941_` (`BasicFileAttributes`)

**Returns:** `private void`

### preVisitDirectory

```java
public FileVisitResult preVisitDirectory(Path p_289946_, BasicFileAttributes p_289950_)
```

**Parameters:**

- `p_289946_` (`Path`)
- `p_289950_` (`BasicFileAttributes`)

**Returns:** `public FileVisitResult`

### visitFile

```java
public FileVisitResult visitFile(Path p_289986_, BasicFileAttributes p_289991_)
```

**Parameters:**

- `p_289986_` (`Path`)
- `p_289991_` (`BasicFileAttributes`)

**Returns:** `public FileVisitResult`
