export const template = ({value}) => `
    <div class="clockface">
        <div class="pointer" style="transform: rotate(${(value % 60) * 6}deg)">
        </div>
    </div>
`
