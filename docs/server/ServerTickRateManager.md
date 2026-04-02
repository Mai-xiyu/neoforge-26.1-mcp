# ServerTickRateManager

**Package:** `net.minecraft.server`
**Type:** class
**Extends:** `TickRateManager`
**Side:** 🖧 Server

## Methods

### ServerTickRateManager

```java
public ServerTickRateManager(MinecraftServer p_309004_)
```

**Parameters:**

- `p_309004_` (`MinecraftServer`)

**Returns:** `public`

### isSprinting

```java
public boolean isSprinting()
```

**Returns:** `public boolean`

### setFrozen

```java
public void setFrozen(boolean p_309002_)
```

**Parameters:**

- `p_309002_` (`boolean`)

### updateStateToClients

```java
private void updateStateToClients()
```

**Returns:** `private void`

### updateStepTicks

```java
private void updateStepTicks()
```

**Returns:** `private void`

### stepGameIfPaused

```java
public boolean stepGameIfPaused(int p_308975_)
```

**Parameters:**

- `p_308975_` (`int`)

**Returns:** `public boolean`

### stopStepping

```java
public boolean stopStepping()
```

**Returns:** `public boolean`

### stopSprinting

```java
public boolean stopSprinting()
```

**Returns:** `public boolean`

### requestGameToSprint

```java
public boolean requestGameToSprint(int p_308951_)
```

**Parameters:**

- `p_308951_` (`int`)

**Returns:** `public boolean`

### finishTickSprint

```java
private void finishTickSprint()
```

**Returns:** `private void`

### checkShouldSprintThisTick

```java
public boolean checkShouldSprintThisTick()
```

**Returns:** `public boolean`

### endTickWork

```java
public void endTickWork()
```

**Returns:** `public void`

### setTickRate

```java
public void setTickRate(float p_309003_)
```

**Parameters:**

- `p_309003_` (`float`)

### updateJoiningPlayer

```java
public void updateJoiningPlayer(ServerPlayer p_309205_)
```

**Parameters:**

- `p_309205_` (`ServerPlayer`)

**Returns:** `public void`
