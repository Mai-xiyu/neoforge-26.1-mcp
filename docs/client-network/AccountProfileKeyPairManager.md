# AccountProfileKeyPairManager

**Package:** `net.minecraft.client.multiplayer`
**Type:** class
**Implements:** `ProfileKeyPairManager`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### AccountProfileKeyPairManager

```java
public AccountProfileKeyPairManager(UserApiService p_253640_, UUID p_254415_, Path p_253813_)
```

**Parameters:**

- `p_253640_` (`UserApiService`)
- `p_254415_` (`UUID`)
- `p_253813_` (`Path`)

**Returns:** `public`

### prepareKeyPair

```java
public CompletableFuture<Optional<ProfileKeyPair>> prepareKeyPair()
```

**Returns:** `CompletableFuture<Optional<ProfileKeyPair>>`

### shouldRefreshKeyPair

```java
public boolean shouldRefreshKeyPair()
```

**Returns:** `boolean`

### readOrFetchProfileKeyPair

```java
private CompletableFuture<Optional<ProfileKeyPair>> readOrFetchProfileKeyPair(Optional<ProfileKeyPair> p_254074_)
```

**Parameters:**

- `p_254074_` (`Optional<ProfileKeyPair>`)

**Returns:** `private CompletableFuture<Optional<ProfileKeyPair>>`

### readProfileKeyPair

```java
private Optional<ProfileKeyPair> readProfileKeyPair()
```

**Returns:** `private Optional<ProfileKeyPair>`

### writeProfileKeyPair

```java
private void writeProfileKeyPair(ProfileKeyPair p_254227_)
```

**Parameters:**

- `p_254227_` (`ProfileKeyPair`)

**Returns:** `private void`

### parsePublicKey

```java
private static ProfilePublicKey.Data parsePublicKey(KeyPairResponse p_253834_)
```

**Parameters:**

- `p_253834_` (`KeyPairResponse`)

**Returns:** `private static ProfilePublicKey.Data`

### CryptException

```java
throw new CryptException()
```

**Returns:** `throw new`
