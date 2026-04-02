# QueryThreadGs4

**Package:** `net.minecraft.server.rcon.thread`
**Type:** class
**Extends:** `GenericThread`
**Side:** 🖧 Server

## Methods

### QueryThreadGs4

```java
private QueryThreadGs4(ServerInterface p_11541_, int p_11542_)
```

**Parameters:**

- `p_11541_` (`ServerInterface`)
- `p_11542_` (`int`)

**Returns:** `private`

### super

```java
 super("Query Listener")
```

**Parameters:**

- `Listener"` (`"Query`)

**Returns:** ``

### create

```java
public static QueryThreadGs4 create(ServerInterface p_11554_)
```

**Parameters:**

- `p_11554_` (`ServerInterface`)

**Returns:** `QueryThreadGs4`

### sendTo

```java
private void sendTo(byte[] p_11556_, DatagramPacket p_11557_)
```

**Parameters:**

- `p_11556_` (`byte[]`)
- `p_11557_` (`DatagramPacket`)

**Returns:** `private void`

### processPacket

```java
private boolean processPacket(DatagramPacket p_11550_)
```

**Parameters:**

- `p_11550_` (`DatagramPacket`)

**Returns:** `private boolean`

### buildRuleResponse

```java
private byte[] buildRuleResponse(DatagramPacket p_11559_)
```

**Parameters:**

- `p_11559_` (`DatagramPacket`)

**Returns:** `private byte[]`

### getIdentBytes

```java
private byte[] getIdentBytes(SocketAddress p_11552_)
```

**Parameters:**

- `p_11552_` (`SocketAddress`)

**Returns:** `private byte[]`

### validChallenge

```java
private Boolean validChallenge(DatagramPacket p_11561_)
```

**Parameters:**

- `p_11561_` (`DatagramPacket`)

**Returns:** `private Boolean`

### sendChallenge

```java
private void sendChallenge(DatagramPacket p_11564_)
```

**Parameters:**

- `p_11564_` (`DatagramPacket`)

**Returns:** `private void`

### pruneChallenges

```java
private void pruneChallenges()
```

**Returns:** `private void`

### run

```java
public void run()
```

### start

```java
public boolean start()
```

**Returns:** `boolean`

### recoverSocketError

```java
private void recoverSocketError(Exception p_11548_)
```

**Parameters:**

- `p_11548_` (`Exception`)

**Returns:** `private void`

### initSocket

```java
private boolean initSocket()
```

**Returns:** `private boolean`

### RequestChallenge

```java
public RequestChallenge(DatagramPacket p_11573_)
```

**Parameters:**

- `p_11573_` (`DatagramPacket`)

**Returns:** `public`

### before

```java
public Boolean before(long p_11576_)
```

**Parameters:**

- `p_11576_` (`long`)

**Returns:** `public Boolean`

### getChallenge

```java
public int getChallenge()
```

**Returns:** `public int`

### getChallengeBytes

```java
public byte[] getChallengeBytes()
```

**Returns:** `public byte[]`

### getIdentBytes

```java
public byte[] getIdentBytes()
```

**Returns:** `public byte[]`

### getIdent

```java
public String getIdent()
```

**Returns:** `public String`
