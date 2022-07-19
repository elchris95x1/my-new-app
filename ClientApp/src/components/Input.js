function InputBox(hours) {
    return (
        <div class="row">
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="">{props.hours}</span>
                </div>
                <Field type="text" name="timebox1" class="form-control mb-1" autocomplete="off" />
                <Field type="text" name="timebox2" class="form-control mb-1" autocomplete="off" />
            </div>
        </div>
    )
}