# User

**Package:** `net.minecraft.client`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### User

```java
public User(String p_193799_, UUID p_296409_, String p_193800_, Optional<String> p_193802_, Optional<String> p_193803_, User.Type p_193804_)
```

**Parameters:**

- `p_193799_` (`String`)
- `p_296409_` (`UUID`)
- `p_193800_` (`String`)
- `p_193802_` (`Optional<String>`)
- `p_193803_` (`Optional<String>`)
- `p_193804_` (`User.Type`)

**Returns:** `public`

### getSessionId

```java
public String getSessionId()
```

**Returns:** `public String`

### getProfileId

```java
public UUID getProfileId()
```

**Returns:** `public UUID`

### getName

```java
public String getName()
```

**Returns:** `public String`

### getAccessToken

```java
public String getAccessToken()
```

**Returns:** `public String`

### getClientId

```java
public Optional<String> getClientId()
```

**Returns:** `public Optional<String>`

### getXuid

```java
public Optional<String> getXuid()
```

**Returns:** `public Optional<String>`

### getType

```java
public User.Type getType()
```

**Returns:** `public User.Type`

### MSA

```java
, MSA()
```

**Returns:** `,`

### Type

```java
private Type(String p_92558_)
```

**Parameters:**

- `p_92558_` (`String`)

**Returns:** `private`

### byName

```java
public static User.Type byName(String p_92562_)
```

**Parameters:**

- `p_92562_` (`String`)

**Returns:** `User.Type`

### getName

```java
public String getName()
```

**Returns:** `public String`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Type` | enum |  |
