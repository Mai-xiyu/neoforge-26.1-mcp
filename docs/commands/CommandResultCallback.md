# CommandResultCallback

**Package:** `net.minecraft.commands`
**Type:** interface
**Annotations:** `@FunctionalInterface`

## Methods

### onResult

```java
public void onResult(boolean p_309581_, int p_309698_)
```

**Parameters:**

- `p_309581_` (`boolean`)
- `p_309698_` (`int`)

### toString

```java
public String toString()
```

**Returns:** `String`

### onResult

```java
void onResult(boolean p_309554_, int p_309707_)
```

**Parameters:**

- `p_309554_` (`boolean`)
- `p_309707_` (`int`)

### onSuccess

```java
default void onSuccess(int p_309552_)
```

**Parameters:**

- `p_309552_` (`int`)

**Returns:** `default void`

### onFailure

```java
default void onFailure()
```

**Returns:** `default void`

### chain

```java
static CommandResultCallback chain(CommandResultCallback p_309638_, CommandResultCallback p_309688_)
```

**Parameters:**

- `p_309638_` (`CommandResultCallback`)
- `p_309688_` (`CommandResultCallback`)

**Returns:** `static CommandResultCallback`
