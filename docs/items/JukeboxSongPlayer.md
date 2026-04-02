# JukeboxSongPlayer

**Package:** `net.minecraft.world.item`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `PLAY_EVENT_INTERVAL_TICKS` | `int` |  |

## Methods

### JukeboxSongPlayer

```java
public JukeboxSongPlayer(JukeboxSongPlayer.OnSongChanged p_350439_, BlockPos p_350395_)
```

**Parameters:**

- `p_350439_` (`JukeboxSongPlayer.OnSongChanged`)
- `p_350395_` (`BlockPos`)

**Returns:** `public`

### isPlaying

```java
public boolean isPlaying()
```

**Returns:** `public boolean`

### getSong

```java
public JukeboxSong getSong()
```

**Returns:** `JukeboxSong`

### getTicksSinceSongStarted

```java
public long getTicksSinceSongStarted()
```

**Returns:** `public long`

### setSongWithoutPlaying

```java
public void setSongWithoutPlaying(Holder<JukeboxSong> p_350889_, long p_350896_)
```

**Parameters:**

- `p_350889_` (`Holder<JukeboxSong>`)
- `p_350896_` (`long`)

**Returns:** `public void`

### play

```java
public void play(LevelAccessor p_350839_, Holder<JukeboxSong> p_350771_)
```

**Parameters:**

- `p_350839_` (`LevelAccessor`)
- `p_350771_` (`Holder<JukeboxSong>`)

**Returns:** `public void`

### stop

```java
public void stop(LevelAccessor p_350694_, BlockState p_350611_)
```

**Parameters:**

- `p_350694_` (`LevelAccessor`)
- `p_350611_` (`BlockState`)

**Returns:** `public void`

### tick

```java
public void tick(LevelAccessor p_350845_, BlockState p_350953_)
```

**Parameters:**

- `p_350845_` (`LevelAccessor`)
- `p_350953_` (`BlockState`)

**Returns:** `public void`

### spawnMusicParticles

```java
 spawnMusicParticles()
```

**Returns:** ``

### shouldEmitJukeboxPlayingEvent

```java
private boolean shouldEmitJukeboxPlayingEvent()
```

**Returns:** `private boolean`

### spawnMusicParticles

```java
private static void spawnMusicParticles(LevelAccessor p_350908_, BlockPos p_350387_)
```

**Parameters:**

- `p_350908_` (`LevelAccessor`)
- `p_350387_` (`BlockPos`)

**Returns:** `private static void`

### notifyChange

```java
void notifyChange()
```

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `OnSongChanged` | interface |  |
