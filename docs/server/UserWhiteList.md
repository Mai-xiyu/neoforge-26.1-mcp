# UserWhiteList

**Package:** `net.minecraft.server.players`
**Type:** class
**Extends:** `StoredUserList<GameProfile, UserWhiteListEntry>`
**Side:** 🖧 Server

## Methods

### UserWhiteList

```java
public UserWhiteList(File p_11449_)
```

**Parameters:**

- `p_11449_` (`File`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### createEntry

```java
protected StoredUserEntry<GameProfile> createEntry(JsonObject p_11452_)
```

**Parameters:**

- `p_11452_` (`JsonObject`)

**Returns:** `StoredUserEntry<GameProfile>`

### UserWhiteListEntry

```java
return new UserWhiteListEntry()
```

**Returns:** `return new`

### isWhiteListed

```java
public boolean isWhiteListed(GameProfile p_11454_)
```

**Parameters:**

- `p_11454_` (`GameProfile`)

**Returns:** `public boolean`

### getUserList

```java
public String[] getUserList()
```

**Returns:** `String[]`

### getKeyForUser

```java
protected String getKeyForUser(GameProfile p_11458_)
```

**Parameters:**

- `p_11458_` (`GameProfile`)

**Returns:** `protected String`
