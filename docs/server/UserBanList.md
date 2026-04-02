# UserBanList

**Package:** `net.minecraft.server.players`
**Type:** class
**Extends:** `StoredUserList<GameProfile, UserBanListEntry>`
**Side:** 🖧 Server

## Methods

### UserBanList

```java
public UserBanList(File p_11402_)
```

**Parameters:**

- `p_11402_` (`File`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### createEntry

```java
protected StoredUserEntry<GameProfile> createEntry(JsonObject p_11405_)
```

**Parameters:**

- `p_11405_` (`JsonObject`)

**Returns:** `StoredUserEntry<GameProfile>`

### UserBanListEntry

```java
return new UserBanListEntry()
```

**Returns:** `return new`

### isBanned

```java
public boolean isBanned(GameProfile p_11407_)
```

**Parameters:**

- `p_11407_` (`GameProfile`)

**Returns:** `public boolean`

### getUserList

```java
public String[] getUserList()
```

**Returns:** `String[]`

### getKeyForUser

```java
protected String getKeyForUser(GameProfile p_11411_)
```

**Parameters:**

- `p_11411_` (`GameProfile`)

**Returns:** `protected String`
