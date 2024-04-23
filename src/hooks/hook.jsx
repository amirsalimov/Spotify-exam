<div className="px-5 mt-10 flex flex-col gap-4">
  {likedSongs.length > 0 ? (
    likedSongs.map((item, i) => (
      <div key={i} className="text-white flex items-center justify-between">
        <span className="text-white">{item.name}</span>
        <div className="actions">
          <button
            onClick={() => removeFromLikedSongsHandler(item.id)}
            className="text-white p-3 bg-slate-600 mx-2"
          >
            Unlike
          </button>
        </div>
      </div>
    ))
  ) : (
    <h1 className="text-white">You don`t have any liked songs yet</h1>
  )}
</div>;
