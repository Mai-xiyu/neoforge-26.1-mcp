# ServerOpList

**Package:** `net.minecraft.server.players`
**Type:** class
**Extends:** `StoredUserList<GameProfile, ServerOpListEntry>`
**Side:** 🖧 Server

## Methods

### ServerOpList

```java
public ServerOpList(File p_11345_)
```

**Parameters:**

- `p_11345_` (`File`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### createEntry

```java
protected StoredUserEntry<GameProfile> createEntry(JsonObject p_11348_)
```

**Parameters:**

- `p_11348_` (`JsonObject`)

**Returns:** `StoredUserEntry<GameProfile>`

### ServerOpListEntry

```java
return new ServerOpListEntry()
```

**Returns:** `return new`

### getUserList

```java
public String[] getUserList()
```

**Returns:** `String[]`

### canBypassPlayerLimit

```java
public boolean canBypassPlayerLimit(GameProfile p_11352_)
```

**Parameters:**

- `p_11352_` (`GameProfile`)

**Returns:** `public boolean`

### getKeyForUser

```java
protected String getKeyForUser(GameProfile p_11354_)
```

**Parameters:**

- `p_11354_` (`GameProfile`)

**Returns:** `protected String`
